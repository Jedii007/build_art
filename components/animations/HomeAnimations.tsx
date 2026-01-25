"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeAnimations() {
  useEffect(() => {
    let ctx: gsap.Context | null = null;
    let isMounted = true;

    const observers: IntersectionObserver[] = [];
    const intervals: number[] = [];
    const timeouts: number[] = [];

    const queueTimeout = (callback: () => void, delay: number) => {
      const id = window.setTimeout(callback, delay);
      timeouts.push(id);
      return id;
    };

    const init = async () => {
      const { default: Splitting } = await import("splitting");
      if (!isMounted) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const slides = Array.from(
          document.querySelectorAll<HTMLImageElement>(".hero__bg-slide")
        );

        if (slides.length > 0) {
          let currentSlide = 0;
          const slideInterval = 3000;

          slides[0].classList.add("active");

          const showSlide = (index: number) => {
            const prevIndex = currentSlide;

            slides[prevIndex].classList.add("exiting");
            slides[prevIndex].classList.remove("active");

            queueTimeout(() => {
              slides[index].classList.add("active");
              slides[index].classList.remove("exiting");
            }, 50);

            queueTimeout(() => {
              slides[prevIndex].classList.remove("exiting");
            }, 3000);
          };

          const nextSlide = () => {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
            currentSlide = nextIndex;
          };

          const intervalId = window.setInterval(nextSlide, slideInterval);
          intervals.push(intervalId);
        }

        const heroServiceLeft = document.querySelector(".hero__service-left");
        const heroServiceCenter = document.querySelector(".hero__service-center");
        const heroServiceRight = document.querySelector(".hero__service-right");
        const heroTitle = document.querySelector(".hero__title");
        const heroCtas = document.querySelector(".hero__ctas");

        if (
          heroServiceLeft &&
          heroServiceCenter &&
          heroServiceRight &&
          heroTitle &&
          heroCtas
        ) {
          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            delay: 0.5,
          });

          tl.from(heroServiceLeft, {
            opacity: 0,
            x: -40,
            duration: 1,
          })
            .from(
              heroServiceCenter,
              {
                opacity: 0,
                y: 0,
                duration: 1,
              },
              "-=0.8"
            )
            .from(
              heroServiceRight,
              {
                opacity: 0,
                x: 40,
                duration: 1,
              },
              "-=0.8"
            )
            .from(
              heroTitle,
              {
                opacity: 0,
                y: 60,
                duration: 1.4,
              },
              "-=0.5"
            )
            .from(
              heroCtas,
              {
                opacity: 0,
                y: 0,
                duration: 0.8,
              },
              "-=0.6"
            );

          gsap.to(heroTitle, {
            yPercent: -50,
            scale: 0.95,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });

          gsap.to([heroServiceLeft, heroServiceCenter, heroServiceRight], {
            yPercent: -80,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });

          gsap.to(heroCtas, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        const introSection = document.querySelector(".intro");
        const introText = document.querySelector<HTMLElement>(".intro__text");
        const speedLines = document.querySelectorAll(".intro .speed-line");

        if (introSection && introText) {
          if (!introText.querySelector(".word")) {
            Splitting({ target: introText, by: "words" });
          }

          const words = Array.from(
            introText.querySelectorAll<HTMLElement>(".word")
          );
          let hasEntered = false;

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasEntered) {
                  hasEntered = true;

                  const tl = gsap.timeline({
                    scrollTrigger: {
                      trigger: introSection,
                      start: "top top",
                      end: `+=${words.length * 100}`,
                      scrub: 1,
                      pin: true,
                    },
                  });

                  speedLines.forEach((line, index) => {
                    tl.fromTo(
                      line,
                      {
                        y: window.innerHeight,
                        opacity: 0,
                      },
                      {
                        y: -window.innerHeight,
                        opacity: 1,
                        duration: 0.5,
                        ease: "none",
                      },
                      index * 0.2
                    );
                  });

                  words.forEach((word, index) => {
                    tl.to(
                      word,
                      {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out",
                      },
                      index * 0.1
                    );
                  });
                }
              });
            },
            { threshold: 0.3 }
          );

          observer.observe(introSection);
          observers.push(observer);
        }

        const trustSection = document.querySelector(".trust");
        const trustImages = document.querySelectorAll(".trust__image");
        const trustContent = document.querySelector(".trust__content");

        if (trustSection && trustContent) {
          let hasEntered = false;

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasEntered) {
                  hasEntered = true;

                  gsap.from(trustImages, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                  });

                  gsap.from(trustContent, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    delay: 0.6,
                    ease: "power3.out",
                  });
                }
              });
            },
            { threshold: 0.2 }
          );

          observer.observe(trustSection);
          observers.push(observer);
        }

        const servicesSection = document.querySelector(".services");
        const servicesTitle = document.querySelector(".services__title");
        const cardsContainer = document.querySelector<HTMLElement>(
          ".services__cards-container"
        );
        const wrapper = document.querySelector<HTMLElement>(".services__wrapper");
        const cards = gsap.utils.toArray<HTMLElement>(".service-card");

        if (servicesSection && cardsContainer && wrapper && cards.length > 0) {
          let hasEntered = false;

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasEntered) {
                  hasEntered = true;

                  if (servicesTitle) {
                    gsap.from(servicesTitle, {
                      opacity: 0,
                      y: 40,
                      duration: 0.8,
                      ease: "power3.out",
                    });
                  }

                  ScrollTrigger.create({
                    trigger: cardsContainer,
                    start: "top top",
                    end: "bottom bottom",
                    pin: wrapper,
                    pinSpacing: false,
                  });

                  cards.forEach((card, index) => {
                    if (index > 0) {
                      gsap.set(card, { xPercent: 100 });
                    }
                  });

                  cards.forEach((card, index) => {
                    if (index === 0) return;

                    const progress = (index - 1) / cards.length;
                    const nextProgress = index / cards.length;

                    gsap.fromTo(
                      card,
                      { xPercent: 100 },
                      {
                        xPercent: 0,
                        ease: "none",
                        scrollTrigger: {
                          trigger: cardsContainer,
                          start: `top+=${progress * cardsContainer.offsetHeight} top`,
                          end: `top+=${nextProgress * cardsContainer.offsetHeight} top`,
                          scrub: true,
                        },
                      }
                    );
                  });
                }
              });
            },
            { threshold: 0.1 }
          );

          observer.observe(servicesSection);
          observers.push(observer);
        }

        const persuasionSection = document.querySelector(".persuasion");
        const persuasionHeader = document.querySelector(".persuasion__header");
        const persuasionImages = document.querySelectorAll(".persuasion__image");
        const persuasionBullets = document.querySelector(".persuasion__bullets");
        const persuasionCta = document.querySelector(".persuasion__cta");

        if (persuasionSection) {
          let hasEntered = false;

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasEntered) {
                  hasEntered = true;

                  if (persuasionHeader) {
                    gsap.from(persuasionHeader, {
                      opacity: 0,
                      y: 40,
                      duration: 0.8,
                      ease: "power3.out",
                    });
                  }

                  gsap.from(persuasionImages, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: 0.1,
                    delay: 0.4,
                    ease: "power3.out",
                  });

                  if (persuasionBullets) {
                    gsap.from(persuasionBullets, {
                      opacity: 0,
                      y: 30,
                      duration: 0.8,
                      delay: 0.8,
                      ease: "power3.out",
                    });
                  }

                  if (persuasionCta) {
                    gsap.from(persuasionCta, {
                      opacity: 0,
                      y: 20,
                      duration: 0.6,
                      delay: 1.2,
                      ease: "power3.out",
                    });
                  }
                }
              });
            },
            { threshold: 0.2 }
          );

          observer.observe(persuasionSection);
          observers.push(observer);
        }

        const processSection = document.querySelector(".process");
        const processHeadline = document.querySelector(".process__headline");
        const processCards = gsap.utils.toArray<HTMLElement>(".process__item");
        const processCta = document.querySelector(".process__cta");

        if (processSection && processHeadline && processCards.length > 0) {
          let hasEntered = false;

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasEntered) {
                  hasEntered = true;

                  gsap.from(processHeadline, {
                    opacity: 0,
                    y: 80,
                    duration: 0.8,
                    ease: "power3.out",
                  });

                  ScrollTrigger.create({
                    trigger: processHeadline,
                    start: "bottom top",
                    end: "bottom top-=1",
                    onEnter: () => {
                      processSection.classList.add("process--dark");
                    },
                    onLeaveBack: () => {
                      processSection.classList.remove("process--dark");
                    },
                  });

                  processCards.forEach((card, index) => {
                    const image = card.querySelector<HTMLElement>(
                      ".process__image"
                    );
                    const step = card.querySelector<HTMLElement>(".process__step");

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
                          trigger: processCards[index + 1],
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
                          processSection.classList.remove("process--dark");
                        },
                        onLeaveBack: () => {
                          processSection.classList.add("process--dark");
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
                }
              });
            },
            { threshold: 0.2 }
          );

          observer.observe(processSection);
          observers.push(observer);
        }

        const socialProofSection = document.querySelector(".social-proof");
        const socialHeadline = document.querySelector(".social-proof__headline");
        const socialImages = document.querySelectorAll(".social-proof__image");
        const socialCta = document.querySelector(".social-proof__cta");

        if (socialProofSection) {
          let hasEntered = false;

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasEntered) {
                  hasEntered = true;

                  if (socialHeadline) {
                    gsap.from(socialHeadline, {
                      opacity: 0,
                      y: 40,
                      duration: 0.8,
                      ease: "power3.out",
                    });
                  }

                  gsap.from(socialImages, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: 0.1,
                    delay: 0.4,
                    ease: "power3.out",
                  });

                  if (socialCta) {
                    gsap.from(socialCta, {
                      opacity: 0,
                      y: 20,
                      duration: 0.6,
                      delay: 1.2,
                      ease: "power3.out",
                    });
                  }
                }
              });
            },
            { threshold: 0.2 }
          );

          observer.observe(socialProofSection);
          observers.push(observer);
        }

        const finalCtaSection = document.querySelector(".final-cta");
        const finalImage = document.querySelector(".final-cta__image");
        const finalHeadline = document.querySelector(".final-cta__headline");
        const finalSubheadline = document.querySelector(".final-cta__subheadline");
        const finalButtons = document.querySelector(".final-cta__buttons");

        if (finalCtaSection && finalImage && finalHeadline && finalSubheadline) {
          let hasEntered = false;

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasEntered) {
                  hasEntered = true;

                  const tl = gsap.timeline({
                    defaults: { ease: "power3.out" },
                  });

                  tl.to(finalImage, {
                    "--pseudo-y": "-100%",
                    duration: 1.2,
                    ease: "power3.inOut",
                  })
                    .from(
                      finalHeadline,
                      {
                        opacity: 0,
                        y: 60,
                        duration: 0.8,
                      },
                      "-=0.6"
                    )
                    .from(
                      finalSubheadline,
                      {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                      },
                      "-=0.4"
                    );

                  if (finalButtons) {
                    tl.from(
                      finalButtons,
                      {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                      },
                      "-=0.3"
                    );
                  }
                }
              });
            },
            { threshold: 0.3 }
          );

          observer.observe(finalCtaSection);
          observers.push(observer);

          const image = finalImage.querySelector("img");
          if (image) {
            gsap.to(image, {
              y: -80,
              ease: "none",
              scrollTrigger: {
                trigger: finalCtaSection,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }

          gsap.to(finalHeadline, {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: finalCtaSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    };

    void init();

    return () => {
      isMounted = false;
      intervals.forEach((id) => clearInterval(id));
      timeouts.forEach((id) => clearTimeout(id));
      observers.forEach((observer) => observer.disconnect());
      ctx?.revert();
    };
  }, []);

  return null;
}
