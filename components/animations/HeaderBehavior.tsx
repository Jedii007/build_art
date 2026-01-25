"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HeaderBehavior() {
  const pathName = usePathname();

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header");
    const menuToggle = document.querySelector<HTMLButtonElement>(
      ".header__menu-toggle",
    );
    const nav = document.querySelector<HTMLElement>(".header__nav");

    if (!header || !menuToggle || !nav) {
      return;
    }

    const isLightPage = pathName !== "/";
    if (isLightPage) {
      header.classList.add("header--light");
    } else {
      header.classList.remove("header--light");
    }

    const body = document.body;
    const navLinks = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && pathName.startsWith(href) && href !== "/") {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    const handleToggle = () => {
      menuToggle.classList.toggle("active");
      nav.classList.toggle("active");
      body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
    };

    const handleLinkClick = () => {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
      body.style.overflow = "";
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && nav.classList.contains("active")) {
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
        body.style.overflow = "";
      }
    };

    let lastScroll = 0;
    let ticking = false;

    const updateHeader = (currentScroll: number) => {
      if (currentScroll > 100) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }

      if (currentScroll > lastScroll && currentScroll > 1) {
        header.classList.add("header--hidden");
      } else {
        header.classList.remove("header--hidden");
      }

      lastScroll = currentScroll;
    };

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeader(currentScroll);
          ticking = false;
        });
        ticking = true;
      }
    };

    menuToggle.addEventListener("click", handleToggle);
    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      menuToggle.removeEventListener("click", handleToggle);
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      body.style.overflow = "";
    };
  }, [pathName]);

  return null;
}
