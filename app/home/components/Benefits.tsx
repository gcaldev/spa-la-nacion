"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Carrousel from "@/components/Carrousel";
import { Benefit } from "@/lib/api/types";
import Image from "next/image";
import Link from "next/link";

type Tiers =
  | "Club La Nación Black"
  | "Club La Nación Premium"
  | "Club La Nación Classic";

const TIER_COLORS = {
  "Club La Nación Black": "#5c5b78",
  "Club La Nación Premium": "#006ffd",
  "Club La Nación Classic": "#56a1ed",
};

export function Benefits({
  data,
  error,
}: {
  data: Benefit[] | null;
  error: Error | null;
}) {
  const getBenefits = (benefit: Benefit) => {
    return Object.entries(benefit.highestBenefits).map(([tier, discount]) => (
      <p key={tier} style={{ color: TIER_COLORS[tier as Tiers] }}>
        {discount}%
      </p>
    ));
  };

  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="benefit-detail">
          <h2>Turismo en Buenos Aires</h2>
          <Button onClick={() => alert("TODOS LOS BENEFICIOS")}>
            TODOS LOS BENEFICIOS
          </Button>
        </div>
        {error && <h2>Ups! Tuvimos un problema al obtener los beneficios</h2>}
        {data && (
          <Carrousel>
            {data.map((benefit: Benefit) => (
              <Card key={benefit.id}>
                <Card.Body>
                  <Link href={benefit.url}>
                    <Image
                      src={benefit.image}
                      alt={benefit.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>
                </Card.Body>
                <Card.Footer>
                  <div className="benefit-footer-detail">
                    <Link href={benefit.url}>
                      <p className="benefit-name">{benefit.name}</p>
                    </Link>
                    <div className="client-type-benefit">
                      {getBenefits(benefit)}
                    </div>
                    <p className="benefit-distance">
                      📍 A <strong>{benefit.distance}</strong>
                    </p>
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
