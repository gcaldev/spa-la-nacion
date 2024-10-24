"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Carrousel from "@/components/Carrousel";
import { Discount } from "@/lib/api/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Discounts({
  data,
  error,
}: {
  data: Discount[] | null;
  error: Error | null;
}) {
  const router = useRouter();
  return (
    <section className="discounts">
      <div className="discounts-container">
        <div>
          <div className="discount-detail">
            <h2>Códigos de descuento</h2>
            <p>
              ¿Sos socio de Club LA NACION? Descargá tu código y disfrutá
              beneficios exclusivos en tus marcas favoritas
            </p>
          </div>
          <Button onClick={() => alert("TODOS LOS CODIGOS")}>
            TODOS LOS CÓDIGOS
          </Button>
        </div>
        {error && <h2>Ups! Tuvimos un problema al obtener los beneficios</h2>}
        {data && (
          <Carrousel>
            {data.map((discount: Discount) => (
              <Card key={discount.id}>
                <Card.Body>
                  <Image
                    src={discount.image}
                    alt={discount.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </Card.Body>
                <Card.Footer backgroundColor="#006ffd">
                  <div className="discount-footer-detail">
                    <p className="discount-footer-name">{discount.name}</p>

                    <Button
                      onClick={() => router.push(discount.url)}
                      borderRadius="8px"
                      size="s"
                      theme="secondary"
                    >
                      QUIERO MI CÓDIGO
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </Carrousel>
        )}
      </div>
    </section>
  );
}
