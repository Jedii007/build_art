"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExhibitionsAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanupCallbacks: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const hero = document.querySelector(".exhibitions-hero");
      const image = document.querySelector(".exhibitions-hero__image");
      const content = document.querySelector(".exhibitions-hero__content");
      const headline = document.querySelector(".exhibitions-hero__headline");
      const text = document.querySelector(".exhibitions-hero__text");
      const ctas = document.querySelector(".exhibitions-hero__ctas");
      const trust = document.querySelector(".exhibitions-hero__trust");

      if (hero && image && content && headline && text && ctas && trust) {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          delay: 0.3,
        });

        tl.from(image, {
          opacity: 0,
          scale: 1.1,
          duration: 1.2,
        })
          .from(
            content,
            {
              opacity: 0,
              y: 60,
              duration: 1,
            },
            "-=0.6"
          )
          .from(
            headline,
            {
              opacity: 0,
              y: 30,
              duration: 0.8,
            },
            "-=0.4"
          )
          .from(
            text,
            {
              opacity: 0,
              y: 20,
              duration: 0.8,
            },
            "-=0.5"
          )
          .from(
            ctas,
            {
              opacity: 0,
              y: 20,
              duration: 0.6,
            },
            "-=0.4"
          )
          .from(
            trust,
            {
              opacity: 0,
              y: 20,
              duration: 0.6,
            },
            "-=0.3"
          );
      }

      const typesSection = document.querySelector(".exhibition__types");
      const typesHeadline = document.querySelector(".exhibition__types-headline");
      const typesStage =
        document.querySelector<HTMLElement>(".exhibition__types-stage");
      const typesWrapper =
        document.querySelector<HTMLElement>(".exhibition__types-wrapper");
      const typeCards = gsap.utils.toArray<HTMLElement>(
        ".exhibition__type-card"
      );

      if (
        typesSection &&
        typesHeadline &&
        typesStage &&
        typesWrapper &&
        typeCards.length > 0
      ) {
        gsap.from(typesHeadline, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: typesHeadline,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        if (window.innerWidth > 768) {
          ScrollTrigger.create({
            trigger: typesStage,
            start: "top top",
            end: "bottom bottom",
            pin: typesWrapper,
            pinSpacing: false,
          });

          typeCards.forEach((card, index) => {
            const progress = index / typeCards.length;
            const nextProgress = (index + 1) / typeCards.length;

            if (index < typeCards.length - 1) {
              const isEven = index % 2 === 0;

              gsap.set(card, {
                clipPath: "inset(0 0 0 0)",
              });

              gsap.to(card, {
                clipPath: isEven ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
                ease: "none",
                scrollTrigger: {
                  trigger: typesStage,
                  start: `top+=${progress * typesStage.offsetHeight} top`,
                  end: `top+=${nextProgress * typesStage.offsetHeight} top`,
                  scrub: true,
                },
              });
            }
          });
        }
      }

      const processSection = document.querySelector(".exhibition__process");
      const processHeadline = document.querySelector(
        ".exhibition__process-headline"
      );
      const processCards = gsap.utils.toArray<HTMLElement>(
        ".exhibition__process-item"
      );

      if (processSection && processHeadline && processCards.length > 0) {
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
            processSection.classList.add("exhibition__process--dark");
          },
          onLeaveBack: () => {
            processSection.classList.remove("exhibition__process--dark");
          },
        });

        processCards.forEach((card, index) => {
          const image = card.querySelector<HTMLElement>(
            ".exhibition__process-image"
          );
          const step = card.querySelector<HTMLElement>(
            ".exhibition__process-step"
          );

          if (!image || !step) return;

          if (index < processCards.length - 1) {
            ScrollTrigger.create({
              trigger: card,
              start: "top top",
              end: () => `+=${window.innerHeight}`,
              pin: true,
              pinSpacing: false,
            });

            gsap.to(image, {
              "--pseudo-y": "-100%",
              scrollTrigger: {
                trigger: card,
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
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              duration: 0.8,
              ease: "power3.out",
            });

            gsap.to(card, {
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
                trigger: card,
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
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              duration: 0.8,
              ease: "power3.out",
            });

            ScrollTrigger.create({
              trigger: card,
              start: "top center",
              onEnter: () => {
                processSection.classList.remove("exhibition__process--dark");
              },
              onLeaveBack: () => {
                processSection.classList.add("exhibition__process--dark");
              },
            });
          }
        });
      }

      const faqSection = document.querySelector(".exhibition__faq");
      if (faqSection) {
        const items = Array.from(
          faqSection.querySelectorAll<HTMLDetailsElement>(
            ".exhibition__faq-item"
          )
        );

        items.forEach((item) => {
          const answer = item.querySelector<HTMLElement>(
            ".exhibition__faq-answer"
          );
          const icon = item.querySelector<HTMLElement>(
            ".exhibition__faq-icon"
          );

          if (!answer) return;

          gsap.set(answer, { height: 0, opacity: 0 });
          if (icon) gsap.set(icon, { rotate: 0 });
          item.open = false;
        });

        items.forEach((item) => {
          const answer = item.querySelector<HTMLElement>(
            ".exhibition__faq-answer"
          );
          const icon = item.querySelector<HTMLElement>(
            ".exhibition__faq-icon"
          );

          if (!answer) return;

          const handler = () => {
            if (item.open) {
              items.forEach((other) => {
                if (other === item) return;
                const otherAnswer = other.querySelector<HTMLElement>(
                  ".exhibition__faq-answer"
                );
                const otherIcon = other.querySelector<HTMLElement>(
                  ".exhibition__faq-icon"
                );

                if (other.open) other.open = false;

                if (otherAnswer) {
                  gsap.to(otherAnswer, {
                    height: 0,
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.out",
                  });
                }

                if (otherIcon) {
                  gsap.to(otherIcon, {
                    rotate: 0,
                    duration: 0.35,
                    ease: "power2.out",
                  });
                }
              });

              gsap.to(answer, {
                height: "auto",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
              });
              if (icon) {
                gsap.to(icon, {
                  rotate: 45,
                  duration: 0.35,
                  ease: "power2.out",
                });
              }
            } else {
              gsap.to(answer, {
                height: 0,
                opacity: 0,
                duration: 0.35,
                ease: "power2.out",
              });
              if (icon) {
                gsap.to(icon, {
                  rotate: 0,
                  duration: 0.35,
                  ease: "power2.out",
                });
              }
            }
          };

          item.addEventListener("toggle", handler);
          cleanupCallbacks.push(() => item.removeEventListener("toggle", handler));
        });
      }
    });

    return () => {
      cleanupCallbacks.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return null;
}
