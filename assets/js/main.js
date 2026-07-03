/* ==============================================
   main.js — 3ページミニサイト テンプレート JS
   Protected selectors (案件中に変更しないこと):
     [data-js="menu-toggle"]
     [data-js="mobile-nav"]
     [data-js="faq-button"]
     .c-loader
     .u-reveal
     [data-anim]
============================================== */

(() => {
  'use strict';

  /* =========================================
     1. Body に JS 有効フラグを付与
        CSS側の data-anim アニメーションを有効化する
  ========================================= */
  document.documentElement.classList.add('is-js-active');

  document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       2. Page Loader
          .c-loader 要素があれば、ページ読み込み後に fade-out する
    ========================================= */
    const loader = document.querySelector('.c-loader');

    if (loader) {
      window.addEventListener('load', () => {
        loader.classList.add('is-loaded');
      });

      setTimeout(() => {
        loader.classList.add('is-loaded');
      }, 3000);
    }

    /* =========================================
       3. Mobile Menu Toggle
    ========================================= */
    const menuToggle = document.querySelector('[data-js="menu-toggle"]');
    const mobileNav  = document.querySelector('[data-js="mobile-nav"]');

    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isExpanded));
        mobileNav.setAttribute('aria-hidden', String(isExpanded));
        document.body.classList.toggle('is-scroll-locked', !isExpanded);
      });

      mobileNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          menuToggle.setAttribute('aria-expanded', 'false');
          mobileNav.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('is-scroll-locked');
        });
      });
    }

    /* =========================================
       4. Scroll Reveal (.u-reveal)
    ========================================= */
    const reveals = document.querySelectorAll('.u-reveal');

    if (reveals.length > 0 && 'IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -40px 0px', threshold: 0 }
      );

      reveals.forEach((el) => revealObserver.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('is-visible'));
    }

    /* =========================================
       5. Element-level Scroll Animation ([data-anim])
    ========================================= */
    const animEls = document.querySelectorAll('[data-anim]');

    if (animEls.length > 0 && 'IntersectionObserver' in window) {
      const animObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-animated');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -40px 0px', threshold: 0 }
      );

      animEls.forEach((el) => animObserver.observe(el));
    } else {
      animEls.forEach((el) => el.classList.add('is-animated'));
    }

    /* =========================================
       6. FAQ Accordion (オプション: 使用する場合のみ)
          data-js="faq-button" を付与したボタンで動作する
    ========================================= */
    const faqButtons = document.querySelectorAll('[data-js="faq-button"]');

    faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const answer = button.nextElementSibling;

        button.setAttribute('aria-expanded', String(!isExpanded));

        if (answer) {
          answer.setAttribute('aria-hidden', String(isExpanded));
        }
      });
    });

  });

})();
