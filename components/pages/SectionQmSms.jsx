"use client";

import { SectionQmSmsData } from "../../config/pages/Home/sectionQmSms";
import { IconsQmSms } from "../../Icons/Icons";

import { Imgs } from "../../config/images";

import "../../styles/pages/home/sectionQmSms/SectionQmSms.scss";

export default function SectionQmSms() {
  return (
    <div id="QuemSomos">
      <div className="container">
        
        {/* LADO ESQUERDO – TEXTO */}
        <div className="card">
          <h2 className="title">
            {SectionQmSmsData.title}
            <IconsQmSms.User />
          </h2>

          <p className="description">
            {SectionQmSmsData.description}
          </p>

          <div className="socials">
            {SectionQmSmsData.socials?.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  data-social={item.name.toLowerCase()}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* LADO DIREITO – IMAGEM */}
        <div className="image">
          <img src={Imgs.SectionQmSms.qmsm.src ?? Imgs.SectionQmSms.qmsm} alt="SEF Climatização & Elétrica" />
        </div>

      </div>
    </div>
  );
}