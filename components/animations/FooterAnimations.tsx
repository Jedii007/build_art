"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FooterAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const footer = document.querySelector(".footer");
    const logo = document.querySelector(".footer__logo");
    const nav = document.querySelector(".footer__nav");
    const contact = document.querySelector(".footer__contact");
    const legal = document.querySelector(".footer__legal");

    if (!footer || !logo || !nav || !contact || !legal) {
      return;
    }

    let hasEntered = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasEntered) {
            hasEntered = true;

            const tl = gsap.timeline({
              defaults: { ease: "power3.out" },
            });

            tl.from(logo, {
              opacity: 0,
              y: 30,
              duration: 0.8,
            })
              .from(
                nav.querySelectorAll("a"),
                {
                  opacity: 0,
                  y: 20,
                  duration: 0.6,
                  stagger: 0.05,
                },
                "-=0.4"
              )
              .from(
                contact,
                {
                  opacity: 0,
                  y: 20,
                  duration: 0.6,
                },
                "-=0.5"
              )
              .from(
                legal,
                {
                  opacity: 0,
                  y: 20,
                  duration: 0.6,
                },
                "-=0.3"
              );
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
