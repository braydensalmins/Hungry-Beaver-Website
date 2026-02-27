import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { CheckCircle2, ShieldCheck, MapPin, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-beaver-dark text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-beaver-dark via-beaver-dark/80 to-beaver-dark/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:pt-20 lg:pb-32 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          
          {/* Factual Trust Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Local, Licensed & Insured</span>
            </div>
            <div className="hidden sm:block w-1 h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-beaver-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Fast Text Estimates</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            WE GRIND STUMPS. <br />
            <span className="text-beaver-orange text-glow">YOU GET YOUR YARD BACK.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Fast, reliable, and affordable stump removal in the Greater Phoenix Valley. <br className="hidden md:block"/>
            Text us a photo and get a firm price in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-orange-900/20" onClick={() => navigate('/quote')}>
              Get a Free Quote
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-beaver-dark" onClick={() => window.location.href = `sms:${PHONE_NUMBER}`}>
              Text Us a Photo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> 5-Star Rated
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-beaver-orange" /> Same-Day Estimates
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-beaver-orange" /> Serving 14+ Valley Cities
            </div>
          </div>
        </div>
      </div>
      
      {/* Layered Forest Silhouette Separator */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-0" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
             className="block w-full" style={{ display: 'block', marginBottom: '-1px' }}>
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF7F00"/>
              <stop offset="35%" stopColor="#b85500"/>
              <stop offset="65%" stopColor="#3a2d1a"/>
              <stop offset="100%" stopColor="#1f2937"/>
            </linearGradient>
            <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CC6600"/>
              <stop offset="40%" stopColor="#8B4500"/>
              <stop offset="75%" stopColor="#2a2218"/>
              <stop offset="100%" stopColor="#1f2937"/>
            </linearGradient>
            <linearGradient id="grad3" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5a3010"/>
              <stop offset="50%" stopColor="#2e2010"/>
              <stop offset="85%" stopColor="#1f2030"/>
              <stop offset="100%" stopColor="#1f2937"/>
            </linearGradient>
          </defs>
          {/* Layer 1 — Back Forest (tips y≈65–90, terrain y≈178–182) */}
          <path fill="url(#grad1)" d="M 0,300 L 0,180 L 33,180
Q 41,130 64,125 Q 62,91 85,72 Q 108,91 106,125 Q 129,130 137,178
Q 152,183 167,182
Q 176,131 202,125 Q 199,89 225,68 Q 251,89 248,125 Q 274,131 283,182
Q 301,185 320,178
Q 328,134 350,129 Q 348,98 370,80 Q 393,98 390,129 Q 413,134 420,178
Q 437,183 455,180
Q 463,131 488,125 Q 485,90 510,70 Q 535,90 532,125 Q 557,131 565,180
Q 583,184 602,178
Q 609,133 631,128 Q 628,96 650,78 Q 672,96 669,128 Q 691,133 698,178
Q 714,183 730,182
Q 739,129 766,124 Q 763,86 790,65 Q 817,86 814,124 Q 841,129 850,182
Q 864,185 878,178
Q 886,131 909,126 Q 907,93 930,74 Q 953,93 951,126 Q 974,131 982,178
Q 998,183 1014,180
Q 1022,130 1048,124 Q 1045,88 1070,68 Q 1095,88 1092,124 Q 1118,130 1126,180
Q 1144,184 1162,178
Q 1169,132 1191,127 Q 1188,94 1210,76 Q 1232,94 1229,127 Q 1251,132 1258,178
Q 1282,183 1306,182
Q 1314,132 1338,126 Q 1336,90 1360,70 Q 1384,90 1382,126 Q 1406,132 1414,182
Q 1427,180 1440,178
L 1440,300 Z"/>
          {/* Layer 2 — Mid Forest (tips y≈120–135, terrain y≈208–214) */}
          <path fill="url(#grad2)" d="M 0,300 L 0,210 L 23,208
Q 29,172 48,168 Q 46,142 65,128 Q 84,142 82,168 Q 101,172 107,208
Q 122,214 137,212
Q 144,172 166,167 Q 163,138 185,122 Q 207,138 204,167 Q 226,172 233,212
Q 249,214 265,208
Q 271,174 289,170 Q 287,146 305,132 Q 323,146 321,170 Q 339,174 345,208
Q 360,214 375,210
Q 382,173 402,169 Q 400,142 420,127 Q 440,142 438,169 Q 458,173 465,210
Q 480,213 495,208
Q 501,175 519,172 Q 517,148 535,135 Q 553,148 551,172 Q 569,175 575,208
Q 588,214 600,212
Q 608,171 630,166 Q 628,137 650,120 Q 673,137 670,166 Q 693,171 700,212
Q 712,213 723,208
Q 729,172 748,168 Q 746,142 765,128 Q 784,142 782,168 Q 801,172 807,208
Q 821,213 834,210
Q 841,172 862,168 Q 859,140 880,125 Q 901,140 898,168 Q 919,172 926,210
Q 941,213 955,208
Q 961,174 979,170 Q 977,146 995,132 Q 1013,146 1011,170 Q 1029,174 1035,208
Q 1049,214 1062,212
Q 1069,172 1091,167 Q 1088,138 1110,122 Q 1132,138 1129,167 Q 1151,172 1158,212
Q 1173,213 1188,208
Q 1194,173 1213,169 Q 1211,144 1230,130 Q 1249,144 1247,169 Q 1266,173 1272,208
Q 1289,214 1306,210
Q 1313,173 1332,169 Q 1330,143 1350,128 Q 1370,143 1368,169 Q 1387,173 1394,210
Q 1417,212 1440,210
L 1440,300 Z"/>
          {/* Layer 3 — Foreground Trees + Houses (tips y≈170–180, terrain y≈232–235) */}
          <path fill="url(#grad3)" d="M 0,300 L 0,233 L 23,232
Q 28,206 42,204 Q 41,185 55,175 Q 69,185 68,204 Q 82,206 87,232
Q 99,237 110,235
Q 115,206 131,203 Q 129,182 145,170 Q 161,182 159,203 Q 175,206 180,235
Q 195,237 210,232
Q 215,208 228,205 Q 227,188 240,178 Q 254,188 252,205 Q 266,208 270,232
Q 295,236 320,232
L 345,232 L 345,208 L 347,208 L 347,196 L 351,196 L 351,208 L 370,208 L 395,185 L 420,208 L 420,232 L 450,232
Q 459,234 467,232
Q 472,205 487,203 Q 485,184 500,173 Q 515,184 513,203 Q 528,205 533,232
Q 547,237 560,234
Q 565,209 578,206 Q 577,188 590,178 Q 604,188 602,206 Q 616,209 620,234
Q 633,236 646,232
Q 651,205 666,202 Q 665,183 680,172 Q 695,183 694,202 Q 709,205 714,232
Q 727,237 740,234
Q 744,210 757,207 Q 755,190 768,180 Q 781,190 779,207 Q 792,210 796,234
Q 809,236 822,232
Q 827,205 842,203 Q 840,184 855,173 Q 870,184 868,203 Q 883,205 888,232
Q 907,236 925,232
L 950,232 L 950,208 L 952,208 L 952,196 L 956,196 L 956,208 L 975,208 L 1000,185 L 1025,208 L 1025,232 L 1055,232
L 1058,232
Q 1063,206 1077,204 Q 1076,185 1090,175 Q 1104,185 1103,204 Q 1117,206 1122,232
Q 1136,237 1150,234
Q 1155,209 1168,206 Q 1167,188 1180,178 Q 1194,188 1192,206 Q 1206,209 1210,234
Q 1223,236 1236,232
Q 1241,205 1256,202 Q 1255,183 1270,172 Q 1285,183 1284,202 Q 1299,205 1304,232
Q 1317,237 1330,234
Q 1335,208 1348,205 Q 1347,186 1360,176 Q 1374,186 1372,205 Q 1386,208 1390,234
Q 1394,235 1397,232
Q 1401,208 1414,205 Q 1412,188 1425,178 Q 1438,188 1436,205 Q 1440,208 1440,232
L 1440,300 Z"/>
          {/* Layer 4 — Ground Strip (solid #1f2937, blends into WhyUs) */}
          <path fill="#1f2937" d="M 0,300 L 0,248 Q 120,240 240,245 Q 360,250 480,242 Q 600,238 720,245 Q 840,250 960,243 Q 1080,238 1200,245 Q 1320,250 1440,243 L 1440,300 Z"/>
        </svg>
      </div>
    </div>
  );
};