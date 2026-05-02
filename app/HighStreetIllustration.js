export default function HighStreetIllustration() {
  return (
    <div className="w-full bg-cream overflow-hidden">
      <svg
        viewBox="0 0 1400 420"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        aria-label="Illustration of a British high street with independent shops"
      >
        {/* ── SKY ── */}
        <rect x="0" y="0" width="1400" height="420" fill="#FFF8F0" />
        {/* Subtle warm clouds */}
        <ellipse cx="120" cy="60" rx="80" ry="28" fill="#FFE8D6" opacity="0.6" />
        <ellipse cx="170" cy="55" rx="60" ry="22" fill="#FFE8D6" opacity="0.5" />
        <ellipse cx="900" cy="45" rx="90" ry="30" fill="#FFE8D6" opacity="0.5" />
        <ellipse cx="970" cy="40" rx="65" ry="22" fill="#FFE8D6" opacity="0.4" />
        <ellipse cx="1280" cy="65" rx="70" ry="24" fill="#FFE8D6" opacity="0.5" />

        {/* ── PAVEMENT ── */}
        <rect x="0" y="345" width="1400" height="75" fill="#E8D5C0" />
        {/* Pavement cracks / joints */}
        {[0,160,320,480,640,800,960,1120,1280].map(x => (
          <line key={x} x1={x} y1="345" x2={x} y2="420" stroke="#D4BFA8" strokeWidth="1.5" />
        ))}
        <line x1="0" y1="380" x2="1400" y2="380" stroke="#D4BFA8" strokeWidth="1" />

        {/* ── ROAD HINT at bottom ── */}
        <rect x="0" y="410" width="1400" height="10" fill="#C8B49A" />

        {/* ═══════════════════════════════════════════════════════
            SHOPS — left to right:
            1. Newsagent  (x=30,  w=170)
            2. Bakery     (x=220, w=185)
            3. BARBERSHOP (x=430, w=240)  ← centre, tallest
            4. Coffee     (x=695, w=185)
            5. Flower     (x=900, w=175)
            6. Tailor     (x=1095, w=180)
        ═══════════════════════════════════════════════════════ */}

        {/* ─── 1. NEWSAGENT ─── */}
        {/* Building */}
        <rect x="30" y="175" width="170" height="170" rx="3" fill="#7EB5A6" stroke="#2C1810" strokeWidth="2.5" />
        {/* Roof parapet */}
        <rect x="25" y="168" width="180" height="14" rx="3" fill="#6A9D8F" stroke="#2C1810" strokeWidth="2" />
        {/* Awning */}
        <path d="M28 230 Q115 215 202 230 L202 245 Q115 258 28 245 Z" fill="#D94F3D" stroke="#2C1810" strokeWidth="2" />
        <line x1="28" y1="230" x2="28" y2="245" stroke="#2C1810" strokeWidth="1.5" />
        {[62,96,130,164,198].map(x => (
          <line key={x} x1={x} y1="215" x2={x} y2="245" stroke="#2C1810" strokeWidth="1" opacity="0.4" />
        ))}
        {/* Window */}
        <rect x="45" y="185" width="140" height="38" rx="3" fill="#C8E6E0" stroke="#2C1810" strokeWidth="2" />
        <line x1="115" y1="185" x2="115" y2="223" stroke="#2C1810" strokeWidth="1.5" />
        {/* Newspapers in window */}
        <rect x="52" y="193" width="55" height="22" rx="1" fill="white" stroke="#2C1810" strokeWidth="1" />
        <line x1="52" y1="200" x2="107" y2="200" stroke="#2C1810" strokeWidth="1" />
        <line x1="52" y1="206" x2="107" y2="206" stroke="#D94F3D" strokeWidth="2" />
        <rect x="122" y="193" width="55" height="22" rx="1" fill="white" stroke="#2C1810" strokeWidth="1" />
        <line x1="122" y1="200" x2="177" y2="200" stroke="#2C1810" strokeWidth="1" />
        <line x1="122" y1="206" x2="177" y2="206" stroke="#FFD166" strokeWidth="2" />
        {/* Door */}
        <rect x="80" y="270" width="60" height="75" rx="3" fill="#5A8A7C" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="85" y="278" width="22" height="28" rx="1" fill="#C8E6E0" stroke="#2C1810" strokeWidth="1.5" />
        <rect x="113" y="278" width="22" height="28" rx="1" fill="#C8E6E0" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="108" cy="310" r="3" fill="#FFD166" stroke="#2C1810" strokeWidth="1" />
        {/* Hanging sign */}
        <line x1="115" y1="168" x2="115" y2="152" stroke="#2C1810" strokeWidth="2" />
        <rect x="80" y="138" width="70" height="24" rx="4" fill="#8B5E3C" stroke="#2C1810" strokeWidth="2" />
        <text x="115" y="154" textAnchor="middle" fill="#FFF8F0" fontSize="10" fontWeight="bold" fontFamily="serif">NEWSAGENT</text>
        {/* Cat on windowsill */}
        <ellipse cx="55" cy="225" rx="9" ry="6" fill="#D4A76A" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="55" cy="218" r="5" fill="#D4A76A" stroke="#2C1810" strokeWidth="1.5" />
        <polygon points="51,214 53,208 55,214" fill="#D4A76A" stroke="#2C1810" strokeWidth="1" />
        <polygon points="55,214 57,208 59,214" fill="#D4A76A" stroke="#2C1810" strokeWidth="1" />
        <path d="M50 220 Q47 222 45 221" stroke="#2C1810" strokeWidth="1" fill="none" />
        <path d="M60 220 Q63 222 65 221" stroke="#2C1810" strokeWidth="1" fill="none" />
        <circle cx="53" cy="218" r="1" fill="#2C1810" />
        <circle cx="57" cy="218" r="1" fill="#2C1810" />
        {/* Tail */}
        <path d="M64 228 Q72 224 70 232" stroke="#D4A76A" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* ─── 2. BAKERY ─── */}
        <rect x="220" y="165" width="185" height="180" rx="3" fill="#F2C28A" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="215" y="158" width="195" height="14" rx="3" fill="#E5A96A" stroke="#2C1810" strokeWidth="2" />
        {/* Pitched roof shape */}
        <polygon points="215,158 312,120 410,158" fill="#D4874A" stroke="#2C1810" strokeWidth="2.5" />
        {/* Chimney */}
        <rect x="340" y="104" width="20" height="40" fill="#C07040" stroke="#2C1810" strokeWidth="2" />
        <rect x="336" y="100" width="28" height="8" rx="2" fill="#A05A30" stroke="#2C1810" strokeWidth="1.5" />
        {/* Smoke */}
        <path d="M350 100 Q355 90 348 80 Q341 70 348 62" stroke="#C4A48C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
        {/* Awning stripes */}
        <path d="M218 228 Q312 212 407 228 L407 245 Q312 260 218 245 Z" fill="#FF6B35" stroke="#2C1810" strokeWidth="2" />
        {[248,280,312,344,376,408].map(x => (
          <line key={x} x1={x} y1="212" x2={x} y2="248" stroke="#2C1810" strokeWidth="1" opacity="0.35" />
        ))}
        {/* Shop window */}
        <rect x="235" y="175" width="155" height="46" rx="3" fill="#FFF3E0" stroke="#2C1810" strokeWidth="2" />
        <line x1="312" y1="175" x2="312" y2="221" stroke="#2C1810" strokeWidth="1.5" />
        {/* Bread in window */}
        <ellipse cx="268" cy="200" rx="22" ry="12" fill="#D4874A" stroke="#2C1810" strokeWidth="1.5" />
        <path d="M248 196 Q268 188 288 196" stroke="#2C1810" strokeWidth="1" fill="none" />
        {/* Cake */}
        <rect x="322" y="195" width="32" height="16" rx="2" fill="#FFD166" stroke="#2C1810" strokeWidth="1.5" />
        <rect x="326" y="191" width="24" height="6" rx="2" fill="#F2A6A6" stroke="#2C1810" strokeWidth="1" />
        <line x1="338" y1="191" x2="338" y2="186" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="338" cy="185" r="2" fill="#D94F3D" />
        {/* Door */}
        <rect x="282" y="268" width="58" height="77" rx="3" fill="#C07040" stroke="#2C1810" strokeWidth="2.5" />
        {/* Door arch */}
        <path d="M282 285 Q311 265 340 285" fill="#C07040" stroke="#2C1810" strokeWidth="2" />
        <path d="M284 285 Q311 267 338 285" fill="#A05A30" />
        <rect x="289" y="285" width="20" height="30" rx="1" fill="#FFF3E0" stroke="#2C1810" strokeWidth="1.5" />
        <rect x="313" y="285" width="20" height="30" rx="1" fill="#FFF3E0" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="310" cy="306" r="3" fill="#FFD166" stroke="#2C1810" strokeWidth="1" />
        {/* Hanging sign */}
        <line x1="312" y1="158" x2="312" y2="142" stroke="#2C1810" strokeWidth="2" />
        <rect x="274" y="126" width="76" height="26" rx="4" fill="#8B5E3C" stroke="#2C1810" strokeWidth="2" />
        <text x="312" y="143" textAnchor="middle" fill="#FFD166" fontSize="11" fontWeight="bold" fontFamily="serif">BAKERY</text>

        {/* ─── 3. BARBERSHOP (centre, tallest) ─── */}
        <rect x="430" y="140" width="240" height="205" rx="3" fill="#FFF0E0" stroke="#2C1810" strokeWidth="3" />
        {/* Grand parapet */}
        <rect x="422" y="130" width="256" height="18" rx="3" fill="#E8D0B8" stroke="#2C1810" strokeWidth="2.5" />
        {/* Decorative cornice bumps */}
        {[430,462,494,526,558,590,622,654].map(x => (
          <circle key={x} cx={x} cy="130" r="6" fill="#E8D0B8" stroke="#2C1810" strokeWidth="2" />
        ))}
        {/* Facade pilasters */}
        <rect x="430" y="148" width="14" height="197" fill="#E8D0B8" stroke="#2C1810" strokeWidth="1.5" />
        <rect x="656" y="148" width="14" height="197" fill="#E8D0B8" stroke="#2C1810" strokeWidth="1.5" />
        {/* Awning — bold red & white stripes */}
        <path d="M428 222 Q550 205 672 222 L672 244 Q550 260 428 244 Z" fill="white" stroke="#2C1810" strokeWidth="2" />
        {[444,464,484,504,524,544,564,584,604,624,644,664].map((x,i) => (
          i % 2 === 0
            ? <path key={x} d={`M${x} 206 Q${x+8} 204 ${x+8} 204 L${x+8} 262 Q${x} 263 ${x} 262 Z`} fill="#D94F3D" opacity="0.85" />
            : null
        ))}
        <path d="M428 222 Q550 205 672 222 L672 244 Q550 260 428 244 Z" fill="none" stroke="#2C1810" strokeWidth="2" />
        {/* Big shop window L */}
        <rect x="445" y="152" width="95" height="62" rx="3" fill="#C8E8F0" stroke="#2C1810" strokeWidth="2.5" />
        <line x1="492" y1="152" x2="492" y2="214" stroke="#2C1810" strokeWidth="1.5" />
        <line x1="445" y1="183" x2="540" y2="183" stroke="#2C1810" strokeWidth="1.5" />
        {/* Big shop window R */}
        <rect x="560" y="152" width="95" height="62" rx="3" fill="#C8E8F0" stroke="#2C1810" strokeWidth="2.5" />
        <line x1="607" y1="152" x2="607" y2="214" stroke="#2C1810" strokeWidth="1.5" />
        <line x1="560" y1="183" x2="655" y2="183" stroke="#2C1810" strokeWidth="1.5" />
        {/* Window display — scissors & comb */}
        <line x1="460" y1="165" x2="530" y2="205" stroke="#2C1810" strokeWidth="1.5" opacity="0.3" />
        <line x1="530" y1="165" x2="460" y2="205" stroke="#2C1810" strokeWidth="1.5" opacity="0.3" />
        {/* Door — double */}
        <rect x="500" y="268" width="100" height="77" rx="3" fill="#C07040" stroke="#2C1810" strokeWidth="2.5" />
        <path d="M500 290 Q550 268 600 290" fill="#C07040" stroke="#2C1810" strokeWidth="2" />
        <path d="M502 290 Q550 270 598 290" fill="#A05A30" />
        <rect x="507" y="292" width="36" height="42" rx="2" fill="#C8E8F0" stroke="#2C1810" strokeWidth="2" />
        <rect x="557" y="292" width="36" height="42" rx="2" fill="#C8E8F0" stroke="#2C1810" strokeWidth="2" />
        <circle cx="546" cy="315" r="3.5" fill="#FFD166" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="556" cy="315" r="3.5" fill="#FFD166" stroke="#2C1810" strokeWidth="1.5" />
        {/* ── BARBER POLE ── */}
        {/* Pole bracket */}
        <rect x="651" y="220" width="10" height="5" rx="2" fill="#2C1810" />
        <rect x="651" y="270" width="10" height="5" rx="2" fill="#2C1810" />
        {/* Pole shaft */}
        <rect x="655" y="218" width="18" height="62" rx="9" fill="white" stroke="#2C1810" strokeWidth="2" />
        {/* Red stripes */}
        <clipPath id="poleClip">
          <rect x="655" y="218" width="18" height="62" rx="9" />
        </clipPath>
        <g clipPath="url(#poleClip)">
          <path d="M655 218 L673 228 L673 238 L655 228 Z" fill="#D94F3D" />
          <path d="M655 238 L673 248 L673 258 L655 248 Z" fill="#D94F3D" />
          <path d="M655 258 L673 268 L673 278 L655 268 Z" fill="#D94F3D" />
          {/* Blue stripe */}
          <path d="M655 228 L673 238 L673 243 L655 233 Z" fill="#4A90C4" />
          <path d="M655 248 L673 258 L673 263 L655 253 Z" fill="#4A90C4" />
          <path d="M655 268 L673 278 L673 280 L655 278 Z" fill="#4A90C4" />
        </g>
        {/* Pole cap */}
        <ellipse cx="664" cy="218" rx="9" ry="4" fill="#D94F3D" stroke="#2C1810" strokeWidth="1.5" />
        <ellipse cx="664" cy="280" rx="9" ry="4" fill="#D94F3D" stroke="#2C1810" strokeWidth="1.5" />
        {/* Grand hanging sign */}
        <line x1="518" y1="130" x2="518" y2="108" stroke="#2C1810" strokeWidth="2.5" />
        <line x1="582" y1="130" x2="582" y2="108" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="480" y="88" width="140" height="32" rx="6" fill="#8B5E3C" stroke="#2C1810" strokeWidth="2.5" />
        <text x="550" y="108" textAnchor="middle" fill="#FFD166" fontSize="14" fontWeight="bold" fontFamily="serif">BARBERSHOP</text>

        {/* ─── 4. COFFEE SHOP ─── */}
        <rect x="695" y="168" width="185" height="177" rx="3" fill="#C8956A" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="690" y="161" width="195" height="14" rx="3" fill="#B07A50" stroke="#2C1810" strokeWidth="2" />
        {/* Roof arch feature */}
        <path d="M690 161 Q787 132 885 161" fill="#A06840" stroke="#2C1810" strokeWidth="2.5" />
        {/* Awning */}
        <path d="M693 228 Q787 212 882 228 L882 246 Q787 261 693 246 Z" fill="#2C1810" stroke="#2C1810" strokeWidth="2" />
        {[720,748,776,804,832,858,882].map(x => (
          <line key={x} x1={x} y1="212" x2={x} y2="248" stroke="#C8956A" strokeWidth="1.5" opacity="0.5" />
        ))}
        {/* Window */}
        <rect x="708" y="178" width="155" height="44" rx="3" fill="#FFF8E8" stroke="#2C1810" strokeWidth="2" />
        <line x1="785" y1="178" x2="785" y2="222" stroke="#2C1810" strokeWidth="1.5" />
        {/* Coffee cups in window */}
        <rect x="722" y="191" width="18" height="20" rx="2" fill="#FFF8F0" stroke="#2C1810" strokeWidth="1.5" />
        <path d="M740 197 Q745 195 745 202 Q745 207 740 207" stroke="#2C1810" strokeWidth="1.5" fill="none" />
        <ellipse cx="731" cy="191" rx="9" ry="3" fill="#8B5E3C" stroke="#2C1810" strokeWidth="1" />
        <path d="M726 188 Q731 182 736 188" stroke="#8B5E3C" strokeWidth="1.5" fill="none" opacity="0.6" />
        <rect x="756" y="191" width="18" height="20" rx="2" fill="#FFF8F0" stroke="#2C1810" strokeWidth="1.5" />
        <path d="M774 197 Q779 195 779 202 Q779 207 774 207" stroke="#2C1810" strokeWidth="1.5" fill="none" />
        <ellipse cx="765" cy="191" rx="9" ry="3" fill="#8B5E3C" stroke="#2C1810" strokeWidth="1" />
        {/* Chalkboard sign */}
        <rect x="802" y="180" width="50" height="36" rx="2" fill="#3A3A2E" stroke="#2C1810" strokeWidth="1.5" />
        <text x="827" y="195" textAnchor="middle" fill="#FFF8F0" fontSize="7" fontFamily="sans-serif">FLAT WHITE</text>
        <text x="827" y="205" textAnchor="middle" fill="#FFD166" fontSize="7" fontFamily="sans-serif">£3.20</text>
        <text x="827" y="213" textAnchor="middle" fill="#FFF8F0" fontSize="6" fontFamily="sans-serif">ESPRESSO £2.50</text>
        {/* Door */}
        <rect x="753" y="268" width="58" height="77" rx="3" fill="#8B5E3C" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="760" y="278" width="20" height="34" rx="1" fill="#FFF8E8" stroke="#2C1810" strokeWidth="1.5" />
        <rect x="784" y="278" width="20" height="34" rx="1" fill="#FFF8E8" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="782" cy="298" r="3" fill="#FFD166" stroke="#2C1810" strokeWidth="1" />
        {/* Hanging sign */}
        <line x1="787" y1="161" x2="787" y2="145" stroke="#2C1810" strokeWidth="2" />
        <rect x="749" y="129" width="76" height="26" rx="4" fill="#8B5E3C" stroke="#2C1810" strokeWidth="2" />
        <text x="787" y="146" textAnchor="middle" fill="#FFD166" fontSize="11" fontWeight="bold" fontFamily="serif">COFFEE</text>

        {/* ─── 5. FLOWER SHOP ─── */}
        <rect x="900" y="172" width="175" height="173" rx="3" fill="#8DB87A" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="895" y="164" width="185" height="14" rx="3" fill="#74A060" stroke="#2C1810" strokeWidth="2" />
        {/* Pitched roof */}
        <polygon points="895,164 987,128 1080,164" fill="#5A8A46" stroke="#2C1810" strokeWidth="2.5" />
        {/* Awning */}
        <path d="M898 228 Q987 213 1076 228 L1076 246 Q987 260 898 246 Z" fill="#FFD166" stroke="#2C1810" strokeWidth="2" />
        {[924,950,976,1002,1028,1054,1076].map(x => (
          <line key={x} x1={x} y1="213" x2={x} y2="248" stroke="#2C1810" strokeWidth="1" opacity="0.35" />
        ))}
        {/* Window */}
        <rect x="912" y="180" width="150" height="42" rx="3" fill="#D4EEC8" stroke="#2C1810" strokeWidth="2" />
        <line x1="987" y1="180" x2="987" y2="222" stroke="#2C1810" strokeWidth="1.5" />
        {/* Flowers in window */}
        {[
          {cx:935, cy:200, r:10, c:'#D94F3D'},
          {cx:955, cy:196, r:8, c:'#FF6B35'},
          {cx:948, cy:208, r:7, c:'#FFD166'},
          {cx:1006, cy:200, r:10, c:'#F2A6C8'},
          {cx:1026, cy:196, r:8, c:'#D94F3D'},
          {cx:1016, cy:210, r:7, c:'#FF6B35'},
        ].map((f, i) => (
          <g key={i}>
            <circle cx={f.cx} cy={f.cy} r={f.r} fill={f.c} stroke="#2C1810" strokeWidth="1.5" />
            <circle cx={f.cx} cy={f.cy} r={f.r * 0.35} fill="#FFD166" />
          </g>
        ))}
        {/* Stems */}
        {[935,955,948,1006,1026,1016].map(x => (
          <line key={x} x1={x} y1="210" x2={x-2} y2="222" stroke="#5A8A46" strokeWidth="1.5" />
        ))}
        {/* Flower bucket outside */}
        <rect x="902" y="310" width="22" height="28" rx="2" fill="#5A8A46" stroke="#2C1810" strokeWidth="2" />
        <ellipse cx="913" cy="310" rx="11" ry="4" fill="#74A060" stroke="#2C1810" strokeWidth="1.5" />
        {[908,913,918,905,921].map((x,i) => (
          <g key={i}>
            <line x1={x} y1="310" x2={x-1} y2={298-i*2} stroke="#5A8A46" strokeWidth="1.5" />
            <circle cx={x-1} cy={296-i*2} r={5} fill={['#D94F3D','#FFD166','#FF6B35','#F2A6C8','#D94F3D'][i]} stroke="#2C1810" strokeWidth="1" />
          </g>
        ))}
        {/* Door */}
        <rect x="957" y="268" width="60" height="77" rx="3" fill="#5A8A46" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="965" y="278" width="18" height="32" rx="1" fill="#D4EEC8" stroke="#2C1810" strokeWidth="1.5" />
        <rect x="993" y="278" width="18" height="32" rx="1" fill="#D4EEC8" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="990" cy="296" r="3" fill="#FFD166" stroke="#2C1810" strokeWidth="1" />
        {/* Hanging sign */}
        <line x1="987" y1="164" x2="987" y2="148" stroke="#2C1810" strokeWidth="2" />
        <rect x="950" y="132" width="74" height="26" rx="4" fill="#8B5E3C" stroke="#2C1810" strokeWidth="2" />
        <text x="987" y="149" textAnchor="middle" fill="#FFD166" fontSize="10" fontWeight="bold" fontFamily="serif">FLOWERS</text>

        {/* ─── 6. TAILOR ─── */}
        <rect x="1095" y="170" width="175" height="175" rx="3" fill="#B8A0C8" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="1090" y="162" width="185" height="14" rx="3" fill="#9A82B2" stroke="#2C1810" strokeWidth="2" />
        {/* Decorative stepped gable */}
        <polygon points="1090,162 1187,118 1280,162" fill="#9A82B2" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="1174" y="100" width="26" height="46" fill="#9A82B2" stroke="#2C1810" strokeWidth="2" />
        {/* Awning */}
        <path d="M1093 228 Q1187 213 1276 228 L1276 246 Q1187 261 1093 246 Z" fill="#2C1810" stroke="#2C1810" strokeWidth="2" />
        {[1120,1148,1176,1204,1232,1258].map(x => (
          <line key={x} x1={x} y1="213" x2={x} y2="248" stroke="#B8A0C8" strokeWidth="1.5" opacity="0.5" />
        ))}
        {/* Window */}
        <rect x="1108" y="178" width="152" height="44" rx="3" fill="#E0D4EE" stroke="#2C1810" strokeWidth="2" />
        <line x1="1184" y1="178" x2="1184" y2="222" stroke="#2C1810" strokeWidth="1.5" />
        {/* Suit mannequin L */}
        <rect x="1125" y="182" width="24" height="30" rx="2" fill="#2C1810" />
        <ellipse cx="1137" cy="182" rx="8" ry="4" fill="#2C1810" />
        <rect x="1113" y="186" width="10" height="18" rx="2" fill="#2C1810" transform="rotate(-15 1113 186)" />
        <rect x="1151" y="186" width="10" height="18" rx="2" fill="#2C1810" transform="rotate(15 1151 186)" />
        <line x1="1137" y1="182" x2="1137" y2="172" stroke="#2C1810" strokeWidth="2" />
        <circle cx="1137" cy="171" r="3" fill="#8B5E3C" />
        {/* Fabric bolts R window */}
        <rect x="1198" y="187" width="15" height="26" rx="2" fill="#D94F3D" stroke="#2C1810" strokeWidth="1" />
        <rect x="1217" y="187" width="15" height="26" rx="2" fill="#4A90C4" stroke="#2C1810" strokeWidth="1" />
        <rect x="1236" y="187" width="15" height="26" rx="2" fill="#FFD166" stroke="#2C1810" strokeWidth="1" />
        {/* Door */}
        <rect x="1157" y="268" width="60" height="77" rx="3" fill="#7A609A" stroke="#2C1810" strokeWidth="2.5" />
        <path d="M1157 288 Q1187 268 1217 288" fill="#7A609A" stroke="#2C1810" strokeWidth="2" />
        <path d="M1159 288 Q1187 270 1215 288" fill="#6A5088" />
        <rect x="1165" y="290" width="20" height="34" rx="1" fill="#E0D4EE" stroke="#2C1810" strokeWidth="1.5" />
        <rect x="1192" y="290" width="20" height="34" rx="1" fill="#E0D4EE" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="1189" cy="309" r="3" fill="#FFD166" stroke="#2C1810" strokeWidth="1" />
        {/* Hanging sign */}
        <line x1="1187" y1="162" x2="1187" y2="146" stroke="#2C1810" strokeWidth="2" />
        <rect x="1149" y="130" width="76" height="26" rx="4" fill="#8B5E3C" stroke="#2C1810" strokeWidth="2" />
        <text x="1187" y="147" textAnchor="middle" fill="#FFD166" fontSize="11" fontWeight="bold" fontFamily="serif">TAILORS</text>

        {/* ── BICYCLE leaning against newsagent ── */}
        {/* Wheels */}
        <circle cx="168" cy="340" r="22" fill="none" stroke="#2C1810" strokeWidth="3" />
        <circle cx="230" cy="340" r="22" fill="none" stroke="#2C1810" strokeWidth="3" />
        <circle cx="168" cy="340" r="4" fill="#2C1810" />
        <circle cx="230" cy="340" r="4" fill="#2C1810" />
        {/* Spokes */}
        {[0,60,120,180,240,300].map(a => (
          <g key={a}>
            <line
              x1={168 + 4 * Math.cos(a * Math.PI/180)}
              y1={340 + 4 * Math.sin(a * Math.PI/180)}
              x2={168 + 22 * Math.cos(a * Math.PI/180)}
              y2={340 + 22 * Math.sin(a * Math.PI/180)}
              stroke="#2C1810" strokeWidth="1.5"
            />
            <line
              x1={230 + 4 * Math.cos(a * Math.PI/180)}
              y1={340 + 4 * Math.sin(a * Math.PI/180)}
              x2={230 + 22 * Math.cos(a * Math.PI/180)}
              y2={340 + 22 * Math.sin(a * Math.PI/180)}
              stroke="#2C1810" strokeWidth="1.5"
            />
          </g>
        ))}
        {/* Frame */}
        <line x1="168" y1="340" x2="199" y2="316" stroke="#D94F3D" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="199" y1="316" x2="230" y2="340" stroke="#D94F3D" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="199" y1="316" x2="199" y2="340" stroke="#D94F3D" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="199" y1="316" x2="181" y2="320" stroke="#D94F3D" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="181" y1="320" x2="168" y2="316" stroke="#D94F3D" strokeWidth="3.5" strokeLinecap="round" />
        {/* Handlebars */}
        <line x1="230" y1="316" x2="230" y2="308" stroke="#2C1810" strokeWidth="3" strokeLinecap="round" />
        <line x1="222" y1="308" x2="238" y2="308" stroke="#2C1810" strokeWidth="3" strokeLinecap="round" />
        {/* Seat */}
        <line x1="199" y1="316" x2="199" y2="308" stroke="#2C1810" strokeWidth="3" strokeLinecap="round" />
        <line x1="192" y1="308" x2="206" y2="308" stroke="#8B5E3C" strokeWidth="4" strokeLinecap="round" />
        {/* Basket on front */}
        <rect x="236" y="308" width="16" height="14" rx="2" fill="#8B5E3C" stroke="#2C1810" strokeWidth="1.5" />
        <line x1="238" y1="308" x2="238" y2="322" stroke="#2C1810" strokeWidth="1" />
        <line x1="242" y1="308" x2="242" y2="322" stroke="#2C1810" strokeWidth="1" />
        <line x1="246" y1="308" x2="246" y2="322" stroke="#2C1810" strokeWidth="1" />

        {/* ── STREET LAMP ── */}
        <rect x="672" y="170" width="8" height="175" rx="3" fill="#8B7355" stroke="#2C1810" strokeWidth="1.5" />
        <path d="M676 170 Q676 148 700 145" fill="none" stroke="#8B7355" strokeWidth="6" strokeLinecap="round" />
        <circle cx="702" cy="143" r="10" fill="#FFD166" stroke="#2C1810" strokeWidth="2" opacity="0.9" />
        <circle cx="702" cy="143" r="6" fill="#FFE8A0" />
        {/* Lamp glow */}
        <circle cx="702" cy="143" r="18" fill="#FFD166" opacity="0.15" />

        {/* ── POSTBOX ── */}
        <rect x="1285" y="310" width="28" height="45" rx="5" fill="#D94F3D" stroke="#2C1810" strokeWidth="2.5" />
        <rect x="1283" y="308" width="32" height="10" rx="5" fill="#C0392B" stroke="#2C1810" strokeWidth="2" />
        <rect x="1289" y="316" width="20" height="5" rx="1" fill="#2C1810" />
        <text x="1299" y="340" textAnchor="middle" fill="#FFD166" fontSize="7" fontWeight="bold" fontFamily="serif">ER</text>

        {/* ── SMALL DETAILS: Pigeon ── */}
        <ellipse cx="550" cy="340" rx="10" ry="6" fill="#C0B090" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="558" cy="336" r="5" fill="#C0B090" stroke="#2C1810" strokeWidth="1.5" />
        <circle cx="560" cy="335" r="1.5" fill="#2C1810" />
        <path d="M562 335 L567 334 L563 337 Z" fill="#D4874A" />
        {/* Pigeon feet */}
        <line x1="548" y1="346" x2="546" y2="350" stroke="#D4874A" strokeWidth="1.5" />
        <line x1="552" y1="346" x2="554" y2="350" stroke="#D4874A" strokeWidth="1.5" />

        {/* ── PEOPLE on the street ── */}

        {/* Person A — outside bakery, facing right */}
        <circle cx="380" cy="306" r="9" fill="#FDDBB4" stroke="#2C1810" strokeWidth="1.5" />
        {/* Hair */}
        <path d="M371 303 Q380 295 389 303" fill="#5C3A1E" stroke="#2C1810" strokeWidth="1" />
        <rect x="372" y="315" width="16" height="24" rx="3" fill="#D94F3D" stroke="#2C1810" strokeWidth="1.5" />
        {/* Arms — one gesturing out */}
        <line x1="372" y1="320" x2="358" y2="330" stroke="#FDDBB4" strokeWidth="5" strokeLinecap="round" />
        <line x1="388" y1="320" x2="400" y2="316" stroke="#FDDBB4" strokeWidth="5" strokeLinecap="round" />
        {/* Legs */}
        <rect x="373" y="339" width="7" height="16" rx="3" fill="#2C1810" stroke="#2C1810" strokeWidth="1" />
        <rect x="382" y="339" width="7" height="16" rx="3" fill="#2C1810" stroke="#2C1810" strokeWidth="1" />
        {/* Speech bubble A */}
        <rect x="388" y="285" width="54" height="18" rx="7" fill="white" stroke="#2C1810" strokeWidth="1.5" />
        <polygon points="400,303 412,303 406,310" fill="white" stroke="#2C1810" strokeWidth="1" strokeLinejoin="round" />
        <text x="415" y="297" textAnchor="middle" fill="#2C1810" fontSize="7.5" fontFamily="sans-serif">Morning!</text>

        {/* Person B — facing left, replying */}
        <circle cx="432" cy="306" r="9" fill="#C68642" stroke="#2C1810" strokeWidth="1.5" />
        {/* Hair */}
        <path d="M423 302 Q432 294 441 302" fill="#2C1810" stroke="#2C1810" strokeWidth="1" />
        <rect x="424" y="315" width="16" height="24" rx="3" fill="#4A7C59" stroke="#2C1810" strokeWidth="1.5" />
        {/* Arms */}
        <line x1="424" y1="320" x2="414" y2="316" stroke="#C68642" strokeWidth="5" strokeLinecap="round" />
        <line x1="440" y1="320" x2="452" y2="328" stroke="#C68642" strokeWidth="5" strokeLinecap="round" />
        {/* Legs */}
        <rect x="425" y="339" width="7" height="16" rx="3" fill="#2C1810" stroke="#2C1810" strokeWidth="1" />
        <rect x="434" y="339" width="7" height="16" rx="3" fill="#2C1810" stroke="#2C1810" strokeWidth="1" />
        {/* Speech bubble B */}
        <rect x="440" y="285" width="62" height="18" rx="7" fill="white" stroke="#2C1810" strokeWidth="1.5" />
        <polygon points="446,303 458,303 452,310" fill="white" stroke="#2C1810" strokeWidth="1" strokeLinejoin="round" />
        <text x="471" y="297" textAnchor="middle" fill="#2C1810" fontSize="7.5" fontFamily="sans-serif">Alright!</text>

        {/* Person C — walking past tailor, carrying a bag */}
        <circle cx="1060" cy="304" r="9" fill="#FDDBB4" stroke="#2C1810" strokeWidth="1.5" />
        <path d="M1051 300 Q1060 292 1069 300" fill="#8B5E3C" stroke="#2C1810" strokeWidth="1" />
        <rect x="1052" y="313" width="16" height="26" rx="3" fill="#4A90C4" stroke="#2C1810" strokeWidth="1.5" />
        {/* Arm with bag */}
        <line x1="1068" y1="318" x2="1078" y2="322" stroke="#FDDBB4" strokeWidth="5" strokeLinecap="round" />
        <rect x="1077" y="318" width="14" height="16" rx="3" fill="#FFD166" stroke="#2C1810" strokeWidth="1.5" />
        <line x1="1079" y1="318" x2="1089" y2="318" stroke="#2C1810" strokeWidth="1.5" />
        {/* Other arm swinging */}
        <line x1="1052" y1="318" x2="1042" y2="326" stroke="#FDDBB4" strokeWidth="5" strokeLinecap="round" />
        {/* Legs — mid stride */}
        <rect x="1053" y="339" width="7" height="16" rx="3" fill="#2C1810" stroke="#2C1810" strokeWidth="1" transform="rotate(-8 1053 339)" />
        <rect x="1062" y="339" width="7" height="16" rx="3" fill="#2C1810" stroke="#2C1810" strokeWidth="1" transform="rotate(8 1062 339)" />

        {/* Ground line / kerb */}
        <rect x="0" y="344" width="1400" height="4" fill="#C8A880" />
      </svg>
    </div>
  )
}
