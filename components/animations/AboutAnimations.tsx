"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const hero = document.querySelector(".about-hero");
      const title = document.querySelector(".about-hero__title");
      const intro = document.querySelector(".about-hero__intro");
      const image = document.querySelector(".about-hero__image");

      if (!hero || !title || !intro || !image) {
        return;
      }

      gsap.from(title, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(intro, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });

      gsap.from(image, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 1.1,
        ease: "power3.out",
      });

      const processSection =
        document.querySelector(".process") ??
        document.querySelector(".about-process");

      if (!processSection) {
        return;
      }

      const baseClass = processSection.classList.contains("process")
        ? "process"
        : "about-process";
      const processHeadline = processSection.querySelector(
        `.${baseClass}__headline`
      );
      const processCards = gsap.utils.toArray<HTMLElement>(`.${baseClass}__item`);
      const processCta = processSection.querySelector(`.${baseClass}__cta`);

      if (!processHeadline || processCards.length === 0) {
        return;
      }

      gsap.from(processHeadline, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processHeadline,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      ScrollTrigger.create({
        trigger: processHeadline,
        start: "bottom top",
        end: "bottom top-=1",
        onEnter: () => {
          processSection.classList.add(`${baseClass}--dark`);
        },
        onLeaveBack: () => {
          processSection.classList.remove(`${baseClass}--dark`);
        },
      });

      processCards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        const image = cardElement.querySelector<HTMLElement>(
          `.${baseClass}__image`
        );
        const step = cardElement.querySelector<HTMLElement>(
          `.${baseClass}__step`
        );

        if (!image || !step) return;

        if (index < processCards.length - 1) {
          ScrollTrigger.create({
            trigger: cardElement,
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            pin: true,
            pinSpacing: false,
          });

          gsap.to(image, {
            "--pseudo-y": "-100%",
            scrollTrigger: {
              trigger: cardElement,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            duration: 0.8,
            ease: "power3.out",
          });

          gsap.from(step, {
            opacity: 0,
            y: 40,
            scrollTrigger: {
              trigger: cardElement,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            duration: 0.8,
            ease: "power3.out",
          });

          gsap.to(cardElement, {
            scale: 0.7,
            rotateZ: -15,
            ease: "none",
            scrollTrigger: {
              trigger: processCards[index + 1] as HTMLElement,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        } else {
          gsap.to(image, {
            "--pseudo-y": "-100%",
            scrollTrigger: {
              trigger: cardElement,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
            duration: 1.2,
            ease: "power3.inOut",
          });

          gsap.from(step, {
            opacity: 0,
            y: 40,
            scrollTrigger: {
              trigger: cardElement,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            duration: 0.8,
            ease: "power3.out",
          });

          ScrollTrigger.create({
            trigger: cardElement,
            start: "top center",
            onEnter: () => {
              processSection.classList.remove(`${baseClass}--dark`);
            },
            onLeaveBack: () => {
              processSection.classList.add(`${baseClass}--dark`);
            },
          });
        }
      });

      if (processCta) {
        gsap.from(processCta, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: processCta,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          duration: 0.6,
          ease: "power3.out",
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
