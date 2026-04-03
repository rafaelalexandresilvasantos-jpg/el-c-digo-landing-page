import { ArrowRight, Check, ChevronDown, Shield, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Utility ──────────────────────────────────────────────────────────────────
const HOTMART_URL = "https://pay.hotmart.com/S104758048Y?checkoutMode=10";

function openHotmart() {
  window.location.href = HOTMART_URL;
}

function scrollToPrecio() {
  document.querySelector("#precio")?.scrollIntoView({ behavior: "smooth" });
}

// ─── Reusable CTA Button ──────────────────────────────────────────────────────
function CtaButton({
  children,
  large = false,
  fullWidth = false,
  onClick,
  "data-ocid": dataOcid,
}: {
  children: React.ReactNode;
  large?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  "data-ocid"?: string;
}) {
  return (
    <button
      type="button"
      data-ocid={dataOcid}
      onClick={onClick ?? scrollToPrecio}
      style={{
        backgroundColor: "#C1121F",
        color: "#fff",
        fontWeight: 800,
        fontSize: large ? "1.15rem" : "1rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase" as const,
        padding: large ? "1.1rem 2.5rem" : "0.9rem 2rem",
        minHeight: "56px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: fullWidth ? "100%" : "auto",
        maxWidth: fullWidth ? "480px" : "none",
        boxShadow: "none",
        transition: "background-color 0.18s",
        position: "relative" as const,
        overflow: "hidden" as const,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.backgroundColor = "#a50e19";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.backgroundColor = "#C1121F";
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          "#8e0c15";
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          "#a50e19";
      }}
    >
      {children}
    </button>
  );
}

// ─── CTA Block wrapper — consistent spacing for all CTA groups ────────────────
function CtaBlock({
  children,
  dataOcid,
  onClick,
  label = "ACCEDER AHORA",
}: {
  children?: React.ReactNode;
  dataOcid?: string;
  onClick?: () => void;
  label?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          marginBottom: children ? "20px" : "0",
        }}
      >
        <CtaButton large fullWidth data-ocid={dataOcid} onClick={onClick}>
          {label}
        </CtaButton>
      </div>
      {children}
    </div>
  );
}

// ─── SECTION 1: HERO ──────────────────────────────────────────────────────────
function HeroSection() {
  const bullets = [
    "Envías mensajes impulsivos y luego te arrepientes",
    "Explicas demasiado cuando sientes tensión",
    "Sientes ansiedad cuando ella tarda en responder",
    "Revisas el chat constantemente",
  ];

  return (
    <section
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3.5rem 1.5rem 0",
        background: "#000000",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "760px", width: "100%", position: "relative" }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.08,
            marginBottom: "1.75rem",
            letterSpacing: "-0.04em",
          }}
        >
          No la estás perdiendo{" "}
          <span style={{ color: "var(--brand-red)" }}>por falta de amor.</span>
          <br />
          <span style={{ color: "#d4d4d4" }}>La estás perdiendo por cómo</span>{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "#ffffff",
              borderBottom: "3px solid var(--brand-red)",
              paddingBottom: "2px",
            }}
          >
            reaccionas bajo presión.
          </em>
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#888888",
            lineHeight: 1.65,
            maxWidth: "540px",
            margin: "0 auto 2rem",
            fontWeight: 400,
          }}
        >
          El problema no es lo que sientes.{" "}
          <strong style={{ color: "#b0b0b0", fontWeight: 600 }}>
            Es lo que haces cuando lo sientes.
          </strong>
        </p>

        {/* Bullet list */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 auto 0",
            textAlign: "left",
            display: "inline-block",
            paddingBottom: "48px",
          }}
        >
          {bullets.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                marginBottom: "0.75rem",
                color: "#d0d0d0",
                fontSize: "1rem",
              }}
            >
              <ArrowRight
                size={16}
                style={{
                  color: "var(--brand-red)",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── SECTION 2: VIDEO ─────────────────────────────────────────────────────────
function VturbPlayer() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="69cb28db953ef32c144df9b8"]',
    );
    if (!existingScript) {
      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/c8a20b51-83e1-4757-946e-5e61e0c6f8ed/players/69cb28db953ef32c144df9b8/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    // @ts-ignore — vturb-smartplayer is a custom element not in JSX types
    <vturb-smartplayer
      id="vid-69cb28db953ef32c144df9b8"
      style={{ display: "block", margin: "0 auto", width: "100%" }}
    />
  );
}

function VideoSection() {
  return (
    <section
      id="video"
      style={{
        background: "#000000",
        padding: "0 1.5rem 0",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {/* Video intro text */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.75rem, 5.5vw, 2.2rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              margin: 0,
              maxWidth: "300px",
              letterSpacing: "-0.01em",
            }}
          >
            Mira esto hasta el final.
          </p>

          <div style={{ height: "28px" }} />

          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.15rem)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "320px",
            }}
          >
            Vas a entender por qué sigues perdiendo postura…
          </p>

          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.15rem)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.6,
              margin: "6px 0 0",
              maxWidth: "320px",
            }}
          >
            y qué hacer exactamente en el momento en que ocurre.
          </p>
        </div>

        {/* Vturb Video embed */}
        <div
          style={{
            borderRadius: "12px",
            border: "1px solid #2a2a2a",
            overflow: "hidden",
          }}
        >
          <VturbPlayer />
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3: EL ERROR INVISIBLE ───────────────────────────────────────────
function ErrorSection() {
  const blocks = [
    {
      text: "Cuando sientes presión emocional, tu cerebro entra en modo supervivencia. No piensa. Reacciona.",
      highlight: false,
    },
    {
      text: "Esa reacción — el mensaje impulsivo, la explicación de más, el silencio lleno de ansiedad — destruye tu postura en segundos.",
      highlight: false,
    },
    {
      text: "Y la postura lo cambia todo. No las palabras. No las intenciones. La postura.",
      highlight: false,
    },
    {
      text: "El verdadero problema no es lo que sientes. Es que no tienes un sistema para regularte antes de actuar.",
      highlight: true,
    },
  ];

  return (
    <section
      id="error"
      style={{
        background: "#000000",
        padding: "clamp(48px, 6vw, 72px) 1.5rem",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          El error que cambia{" "}
          <span style={{ color: "var(--brand-red)" }}>
            completamente la dinámica
          </span>
        </h2>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {blocks.map((block, i) => (
            <p
              // biome-ignore lint/suspicious/noArrayIndexKey: static list, order never changes
              key={i}
              style={{
                color: block.highlight ? "#ffffff" : "#c8c8c8",
                lineHeight: 1.8,
                fontSize: "1.05rem",
                paddingLeft: "1.25rem",
                borderLeft: block.highlight
                  ? "3px solid var(--brand-red)"
                  : "3px solid #2a2a2a",
                margin: 0,
              }}
            >
              {block.text}
            </p>
          ))}
        </div>

        {/* CTA after problem section */}
        <div
          style={{
            marginTop: "clamp(32px, 5vw, 48px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "480px" }}>
            <CtaButton
              large
              fullWidth
              data-ocid="error.primary_button"
              onClick={scrollToPrecio}
            >
              ENTENDER EL PROTOCOLO
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 4: LA SOLUCIÓN ───────────────────────────────────────────────────
function SolutionSection() {
  const steps = [
    {
      num: 1,
      title: "Interrupción",
      desc: "Corta el impulso en el momento exacto antes de reaccionar.",
    },
    {
      num: 2,
      title: "Estabilización",
      desc: "Recupera el control interno en segundos y baja la intensidad emocional.",
    },
    {
      num: 3,
      title: "Silencio estratégico",
      desc: "No reacciones. Mantén el control y deja que la tensión juegue a tu favor.",
    },
    {
      num: 4,
      title: "Respuesta estructurada",
      desc: "Cuando actúes, será desde el control… no desde la necesidad.",
    },
  ];

  return (
    <section
      id="solucion"
      style={{
        background: "#000000",
        padding: "clamp(48px, 6vw, 72px) 1.5rem",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "3rem",
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto 3rem",
          }}
        >
          Un sistema diseñado para el momento exacto{" "}
          <span style={{ color: "var(--brand-red)" }}>
            antes de que te sabotees
          </span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: "#0a0a0a",
                border: "1px solid #2a2a2a",
                borderRadius: "10px",
                padding: "1.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 900,
                  color: "var(--brand-red)",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-display, system-ui)",
                  opacity: 0.9,
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "var(--brand-muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted quote */}
        <blockquote
          style={{
            textAlign: "center",
            margin: "0",
            padding: "2rem",
            background: "#111111",
            border: "1px solid #2a2a2a",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            "Primero cortas el impulso.{" "}
            <span style={{ color: "var(--brand-red)" }}>Después decides.</span>{" "}
            No al revés."
          </p>
        </blockquote>

        {/* CTA after 4-step section */}
        <div
          style={{
            marginTop: "clamp(32px, 5vw, 48px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "480px" }}>
            <CtaButton
              large
              fullWidth
              data-ocid="solucion.primary_button"
              onClick={scrollToPrecio}
            >
              QUIERO APLICAR ESTO
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 5: PROTOCOLO 3 MINUTOS ──────────────────────────────────────────
function ProtocolSection() {
  const minutos = [
    {
      num: 1,
      label: "Reconocimiento",
      desc: "Detecta el impulso en el instante en que aparece. Nómbralo… pero no actúes.",
    },
    {
      num: 2,
      label: "Regulación",
      desc: "Aplica la técnica que corta la reacción automática y baja la intensidad emocional.",
    },
    {
      num: 3,
      label: "Decisión",
      desc: "Con la mente estable, eliges cómo actuar… o decides no actuar.",
    },
  ];

  return (
    <section
      id="protocolo"
      style={{
        background: "#111111",
        padding: "clamp(48px, 6vw, 72px) 1.5rem",
      }}
    >
      <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.75rem",
          }}
        >
          Tres minutos antes de{" "}
          <span style={{ color: "var(--brand-red)" }}>arruinarlo todo</span>
        </h2>

        <p
          style={{
            color: "var(--brand-muted)",
            marginBottom: "2.5rem",
            fontSize: "0.95rem",
          }}
        >
          El protocolo que usas en el momento exacto en que pierdes el control
        </p>

        <div
          style={{
            border: "1px solid #2a2a2a",
            borderRadius: "12px",
            background: "#000000",
            overflow: "hidden",
          }}
        >
          {minutos.map((minuto, i) => (
            <div
              key={minuto.num}
              style={{
                padding: "1.75rem 2rem",
                borderBottom:
                  i < minutos.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
                textAlign: "left",
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  background: "var(--brand-red)",
                  borderRadius: "6px",
                  padding: "0.35rem 0.65rem",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  color: "#fff",
                  whiteSpace: "nowrap" as const,
                  marginTop: "3px",
                }}
              >
                Min. {minuto.num}
              </div>
              <div>
                <h3
                  style={{
                    fontWeight: 800,
                    color: "#ffffff",
                    fontSize: "1rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  {minuto.label}
                </h3>
                <p
                  style={{
                    color: "var(--brand-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {minuto.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 6: QUÉ INCLUYE ───────────────────────────────────────────────────
function IncludesSection() {
  const items = [
    {
      title: "Protocolo exacto para cortar la reacción en segundos",
      desc: "",
    },
    {
      title: "Audios guiados para estabilizarte en el momento exacto",
      desc: "",
    },
    {
      title:
        "Método claro para recuperar el control sin reaccionar impulsivamente",
      desc: "",
    },
    {
      title: "Instrucciones aplicables en cualquier situación emocional",
      desc: "",
    },
  ];

  return (
    <section
      id="incluye"
      style={{
        background: "#000000",
        padding: "clamp(48px, 6vw, 72px) 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "580px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "2.5rem",
          }}
        >
          Todo lo que obtienes hoy{" "}
          <span style={{ color: "var(--brand-red)" }}>(acceso inmediato)</span>
        </h2>

        <p
          style={{
            color: "#c8c8c8",
            fontSize: "0.9rem",
            fontWeight: 600,
            textAlign: "left",
            marginBottom: "0.75rem",
            marginTop: "0",
          }}
        >
          Acceso completo al sistema:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                background: "#0a0a0a",
                border: "1px solid #2a2a2a",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "rgba(34,197,94,0.15)",
                  border: "1px solid rgba(34,197,94,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                }}
              >
                <Check size={13} style={{ color: "#22c55e" }} />
              </div>
              <div>
                <span
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    display: "block",
                  }}
                >
                  {item.title}
                </span>
                {item.desc && (
                  <span
                    style={{ color: "var(--brand-muted)", fontSize: "0.83rem" }}
                  >
                    {item.desc}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA — scrolls to pricing section */}
        <CtaBlock
          dataOcid="includes.primary_button"
          onClick={scrollToPrecio}
          label="QUIERO ACCEDER AHORA"
        />
      </div>
    </section>
  );
}

// ─── SECTION 7: PARA QUIÉN ES / NO ES ────────────────────────────────────────
function ForWhoSection() {
  const forItems = [
    "Para hombres que reaccionan de forma impulsiva bajo presión emocional",
    "Para quienes quieren recuperar su postura sin jugar juegos",
    "Para los que ya cometieron errores y quieren reencuadrarse",
    "Para quien quiere responder desde la calma, no desde el miedo",
  ];
  const notForItems = [
    "No es para quienes buscan manipular o hacer juegos mentales",
    "No es reconquista ni técnicas de seducción",
    "No es para quien no está dispuesto a hacer el trabajo interno",
    "No es terapia ni coaching de relaciones",
  ];

  return (
    <section
      id="para-quien"
      style={{
        background: "#111111",
        padding: "clamp(48px, 6vw, 72px) 1.5rem",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          ¿Este sistema es para ti?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* For */}
          <div
            style={{
              border: "1px solid #2a2a2a",
              background: "#0a0a0a",
              borderRadius: "12px",
              padding: "2rem",
            }}
          >
            <h3
              style={{
                fontWeight: 800,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#22c55e",
                marginBottom: "1.5rem",
              }}
            >
              ✓ Para quién es
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {forItems.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    color: "#c8c8c8",
                    fontSize: "0.93rem",
                    lineHeight: 1.6,
                  }}
                >
                  <Check
                    size={16}
                    style={{
                      color: "#22c55e",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div
            style={{
              border: "1px solid #2a2a2a",
              background: "#0a0a0a",
              borderRadius: "12px",
              padding: "2rem",
            }}
          >
            <h3
              style={{
                fontWeight: 800,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--brand-red)",
                marginBottom: "1.5rem",
              }}
            >
              ✗ Para quién no es
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {notForItems.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    color: "#c8c8c8",
                    fontSize: "0.93rem",
                    lineHeight: 1.6,
                  }}
                >
                  <X
                    size={16}
                    style={{
                      color: "var(--brand-red)",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 8: PRECIO ────────────────────────────────────────────────────────
function PrecioSection() {
  return (
    <section
      id="precio"
      style={{
        background: "#000000",
        padding: "clamp(48px, 6vw, 72px) 1.5rem",
        textAlign: "center",
        borderTop: "3px solid #C1121F",
      }}
    >
      <div style={{ maxWidth: "480px", margin: "0 auto" }}>
        {/* Urgency note */}
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.55)",
            fontWeight: 400,
            marginBottom: "20px",
            letterSpacing: "0.01em",
            lineHeight: 1.5,
          }}
        >
          Disponible hoy. Puede no estar disponible después.
        </p>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 900,
            color: "#ffffff",
            marginBottom: "28px",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Accede hoy al sistema completo por solo 17 USD (pago único)
        </h2>

        {/* Large price */}
        <div style={{ marginBottom: "32px" }}>
          <span
            style={{
              fontSize: "clamp(4rem, 10vw, 6rem)",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "block",
            }}
          >
            $17
          </span>
        </div>

        {/* Supporting text */}
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.75)",
            fontWeight: 500,
            lineHeight: 1.5,
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Esto es lo que haces en el momento exacto en que pierdes el control.
        </p>

        {/* CTA — THIS IS THE ONLY CHECKOUT BUTTON */}
        <div style={{ width: "100%", maxWidth: "480px", marginBottom: "16px" }}>
          <CtaButton
            large
            fullWidth
            data-ocid="precio.primary_button"
            onClick={openHotmart}
          >
            ACCEDER AHORA
          </CtaButton>
        </div>

        {/* Microcopy — ONLY in this section */}
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.65)",
            margin: "0",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Acceso inmediato • Pago único • Garantía 7 días
          <br />🔒 Pago seguro • Protección SSL
        </p>
      </div>
    </section>
  );
}

// ─── SECTION 9: GARANTÍA ─────────────────────────────────────────────────────
function GarantiaSection() {
  return (
    <section
      id="garantia"
      style={{
        background: "#111111",
        padding: "3rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "480px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#1a1a1a",
            border: "1px solid #2a2a2a",
            marginBottom: "1.5rem",
          }}
        >
          <Shield size={38} style={{ color: "var(--brand-red)" }} />
        </div>

        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "1.25rem",
          }}
        >
          Garantía de 7 días
        </h2>

        <div
          style={{
            background: "#111111",
            border: "1px solid #2a2a2a",
            borderRadius: "12px",
            padding: "1.75rem",
            color: "var(--brand-muted)",
            lineHeight: 1.9,
            fontSize: "0.97rem",
          }}
        >
          <p style={{ margin: 0 }}>
            Tienes <strong style={{ color: "#fff" }}>7 días.</strong>
            <br />
            Aplica el protocolo.
            <br />
            Si no sientes mayor claridad y control, puedes pedir reembolso.
            <br />
            <strong style={{ color: "#fff" }}>Sin complicaciones.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 10: FAQ ──────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "¿Esto es reconquista?",
    a: "No. No vas a perseguir a nadie ni usar técnicas para recuperar a alguien. Esto es sobre regular tu estado emocional y mantener tu postura, independientemente del resultado.",
  },
  {
    q: "¿Esto es manipulación?",
    a: "No. Manipulación es intentar controlar a otros. Esto es aprender a controlarte a ti mismo. Eso no es manipulación, es madurez emocional.",
  },
  {
    q: "¿Y si ya cometí errores?",
    a: "La mayoría de los hombres que usan este sistema ya los cometieron. El protocolo no borra el pasado, pero te da las herramientas para no seguir acumulando errores.",
  },
  {
    q: "¿Y si ella ya está distante?",
    a: "Entonces más razón para trabajar tu postura. La distancia se profundiza con reacciones impulsivas. Se reduce con calma consistente.",
  },
  {
    q: "¿Cuánto tiempo tarda en funcionar?",
    a: "El primer resultado lo puedes ver en la primera situación de presión que enfrentes. La postura se reconstruye con cada respuesta controlada.",
  },
  {
    q: "¿Necesito experiencia previa?",
    a: "No. El sistema está diseñado para ser aplicado directamente, sin conocimientos previos de psicología ni trabajo emocional.",
  },
  {
    q: "¿Y si no me funciona?",
    a: "Tienes 7 días de garantía. Si aplicas el protocolo y no sientes más claridad y control, te devolvemos el dinero.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "#000000",
        padding: "3rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "660px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          Preguntas frecuentes
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                style={{
                  borderBottom: "1px solid #2a2a2a",
                }}
              >
                <button
                  type="button"
                  data-ocid={`faq.toggle.${i + 1}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.25rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#ffffff",
                      fontSize: "0.97rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ flexShrink: 0 }}
                  >
                    <ChevronDown
                      size={18}
                      style={{
                        color: isOpen
                          ? "var(--brand-red)"
                          : "var(--brand-muted)",
                      }}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          color: "var(--brand-muted)",
                          paddingBottom: "1.25rem",
                          lineHeight: 1.8,
                          fontSize: "0.93rem",
                          margin: 0,
                        }}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA — post-FAQ — scrolls to pricing section */}
        <div style={{ marginTop: "3rem" }}>
          <CtaBlock dataOcid="faq.primary_button" onClick={scrollToPrecio} />
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 11: CIERRE FINAL ─────────────────────────────────────────────────
function CierreSection() {
  return (
    <section
      id="cierre"
      style={{
        background: "#000000",
        padding: "3.5rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "2rem",
            letterSpacing: "-0.04em",
          }}
        >
          Cada reacción impulsiva{" "}
          <span style={{ color: "var(--brand-red)" }}>
            debilita tu postura.
          </span>
          <br />
          Cada respuesta controlada{" "}
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "var(--brand-red)",
              textDecorationThickness: "3px",
              textUnderlineOffset: "6px",
            }}
          >
            la fortalece.
          </span>
        </h2>
      </div>
    </section>
  );
}

// ─── TRUST FOOTER ─────────────────────────────────────────────────────────────
function TrustFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const sections = [
    {
      title: "Política de reembolso",
      text: "Si no estás satisfecho dentro de los primeros 7 días, puedes solicitar tu reembolso completo por correo electrónico.",
    },
    {
      title: "Términos y condiciones",
      text: "El acceso a este contenido es personal e intransferible. Al adquirirlo aceptas los términos de uso de la plataforma.",
    },
    {
      title: "Política de privacidad",
      text: "No compartimos tus datos con terceros. Tu información es tratada de forma confidencial y segura.",
    },
    {
      title: "Contacto",
      text: "Para soporte o consultas, escríbenos a soporte@elcodigo.com",
    },
  ];

  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #1e1e1e",
        padding: "2rem 1.5rem 1.5rem",
      }}
    >
      <p
        style={{
          color: "#777",
          fontSize: "0.78rem",
          textAlign: "center",
          marginBottom: "1.5rem",
          lineHeight: 1.6,
          maxWidth: "540px",
          margin: "0 auto 1.5rem",
        }}
      >
        Este contenido es educativo. No reemplaza terapia ni asesoría
        profesional.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem 2rem",
          maxWidth: "860px",
          margin: "0 auto 1.5rem",
        }}
      >
        {sections.map((s) => (
          <div key={s.title}>
            <h4
              style={{
                fontWeight: 600,
                color: "#dcdcdc",
                fontSize: "0.8rem",
                letterSpacing: "0.07em",
                textTransform: "uppercase" as const,
                marginBottom: "0.4rem",
              }}
            >
              {s.title}
            </h4>
            <p
              style={{
                color: "#8a8a8a",
                fontSize: "0.78rem",
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 400,
              }}
            >
              {s.text}
            </p>
          </div>
        ))}
      </div>

      <p
        style={{
          color: "#444",
          fontSize: "0.75rem",
          textAlign: "center",
          marginTop: "1.5rem",
          borderTop: "1px solid #1e1e1e",
          paddingTop: "1.5rem",
        }}
      >
        © {year}. Built with ❤️ using{" "}
        <a
          href={utmLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#555", textDecoration: "underline" }}
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    document.title = "El Código — Controla Tu Impulso";
  }, []);

  useEffect(() => {
    const scrollToPrecioSection = () => {
      const el = document.querySelector("#precio");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === "#precio") {
        scrollToPrecioSection();
      }
    };

    if (window.location.hash === "#precio") {
      const tryScroll = (attempts = 0) => {
        const el = document.querySelector("#precio");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 20) {
          setTimeout(() => tryScroll(attempts + 1), 150);
        }
      };
      setTimeout(() => tryScroll(), 300);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <HeroSection />
      <VideoSection />
      <ErrorSection />
      <SolutionSection />
      <ProtocolSection />
      <IncludesSection />
      <ForWhoSection />
      <PrecioSection />
      <GarantiaSection />
      <FaqSection />
      <CierreSection />
      <TrustFooter />
    </div>
  );
}
