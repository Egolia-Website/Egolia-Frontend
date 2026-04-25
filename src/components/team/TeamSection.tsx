"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import MemberModal, { type TeamMemberDetail } from "./MemberModal";

interface TeamSectionProps {
  title: string;
  members: TeamMemberDetail[];
}

export default function TeamSection({ title, members }: TeamSectionProps) {
  const [selected, setSelected] = useState<TeamMemberDetail | null>(null);

  return (
    <>
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">

          {/* Section heading */}
          <motion.h2
            className="text-[#1d1d1f] text-2xl md:text-3xl font-bold tracking-[-0.01em] mb-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.div
            className="w-8 h-[3px] bg-orange mx-auto mb-12"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />

          {/* Members grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-10">
            {members.map((member, i) => (
              <motion.button
                key={member.name + i}
                className="flex flex-col items-center text-center group focus:outline-none"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => setSelected(member)}
              >
                {/* Circle photo */}
                <div className="relative w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden mb-4 bg-[#eaeaed] shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-[3px] ring-[#eaeaed] group-hover:shadow-[0_6px_28px_rgba(232,121,43,0.15)] group-hover:ring-orange/30 transition-[box-shadow,ring-color] duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500"
                    sizes="140px"
                  />
                </div>

                {/* Name */}
                <p className="text-[#1d1d1f] text-[16px] md:text-[17px] font-bold leading-snug">
                  {member.name}
                </p>

                {/* Role */}
                <p className="text-[#6e6e73] text-[13px] md:text-[14px] mt-1 leading-snug font-medium">
                  {member.role}
                </p>

              </motion.button>
            ))}
          </div>

        </div>
      </section>

      <MemberModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
