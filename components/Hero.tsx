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
      <div className="absolute bottom-0 left-0 w-full leading-none z-20" style={{ lineHeight: 0 }}>
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
          {/* Layer 1 — Distant Hills & Sparse Pines (tips y≈65–90, orange–amber) */}
          <path fill="url(#grad1)" d="M 0,300 L 0,178 Q 40,173 82,175 L 87,165 L 78,120 L 86,120 L 90,68 L 94,120 L 102,120 L 93,165 L 98,175 Q 145,178 187,175 L 192,165 L 183,115 L 191,115 L 195,65 L 199,115 L 207,115 L 198,165 L 203,175 Q 247,182 292,178 L 297,168 L 288,132 L 296,132 L 300,85 L 304,132 L 312,132 L 303,168 L 308,178 Q 378,184 442,175 L 447,165 L 438,122 L 446,122 L 450,72 L 454,122 L 462,122 L 453,165 L 458,175 Q 508,181 552,178 L 557,168 L 548,140 L 556,140 L 560,90 L 564,140 L 572,140 L 563,168 L 568,178 Q 622,184 672,175 L 677,165 L 668,118 L 676,118 L 680,68 L 684,118 L 692,118 L 683,165 L 688,175 Q 740,182 787,177 L 792,167 L 783,130 L 791,130 L 795,82 L 799,130 L 807,130 L 798,167 L 803,177 Q 845,182 882,175 L 887,165 L 878,125 L 886,125 L 890,75 L 894,125 L 902,125 L 893,165 L 898,175 Q 958,184 1012,175 L 1017,165 L 1008,118 L 1016,118 L 1020,68 L 1024,118 L 1032,118 L 1023,165 L 1028,175 Q 1083,182 1122,174 L 1127,164 L 1118,115 L 1126,115 L 1130,65 L 1134,115 L 1142,115 L 1133,164 L 1138,174 Q 1198,182 1252,177 L 1257,167 L 1248,130 L 1256,130 L 1260,80 L 1264,130 L 1272,130 L 1263,167 L 1268,177 Q 1328,184 1372,175 L 1377,165 L 1368,122 L 1376,122 L 1380,72 L 1384,122 L 1392,122 L 1383,165 L 1388,175 Q 1415,179 1440,176 L 1440,300 Z"/>
          {/* Layer 2 — Mid-Distance Dense Forest (tips y≈122–140, amber–brown) */}
          <path fill="url(#grad2)" d="M 0,300 L 0,207 Q 25,204 47,205 L 52,195 L 43,165 L 51,165 L 55,132 L 59,165 L 67,165 L 58,195 L 63,205 Q 105,210 137,203 L 142,193 L 133,160 L 141,160 L 145,125 L 149,160 L 157,160 L 148,193 L 153,203 Q 200,210 232,208 L 237,198 L 228,168 L 236,168 L 240,138 L 244,168 L 252,168 L 243,198 L 248,208 Q 295,213 327,205 L 332,195 L 323,162 L 331,162 L 335,128 L 339,162 L 347,162 L 338,195 L 343,205 Q 395,212 422,207 L 427,197 L 418,170 L 426,170 L 430,140 L 434,170 L 442,170 L 433,197 L 438,207 Q 478,211 507,204 L 512,194 L 503,163 L 511,163 L 515,128 L 519,163 L 527,163 L 518,194 L 523,204 Q 582,212 612,206 L 617,196 L 608,165 L 616,165 L 620,135 L 624,165 L 632,165 L 623,196 L 628,206 Q 685,212 712,203 L 717,193 L 708,158 L 716,158 L 720,122 L 724,158 L 732,158 L 723,193 L 728,203 Q 782,212 812,208 L 817,198 L 808,170 L 816,170 L 820,140 L 824,170 L 832,170 L 823,198 L 828,208 Q 880,213 907,205 L 912,195 L 903,163 L 911,163 L 915,130 L 919,163 L 927,163 L 918,195 L 923,205 Q 977,211 1002,203 L 1007,193 L 998,160 L 1006,160 L 1010,125 L 1014,160 L 1022,160 L 1013,193 L 1018,203 Q 1075,212 1102,206 L 1107,196 L 1098,167 L 1106,167 L 1110,135 L 1114,167 L 1122,167 L 1113,196 L 1118,206 Q 1172,212 1202,204 L 1207,194 L 1198,162 L 1206,162 L 1210,128 L 1214,162 L 1222,162 L 1213,194 L 1218,204 Q 1275,213 1307,207 L 1312,197 L 1303,170 L 1311,170 L 1315,140 L 1319,170 L 1327,170 L 1318,197 L 1323,207 Q 1375,212 1402,203 L 1407,193 L 1398,165 L 1406,165 L 1410,130 L 1414,165 L 1422,165 L 1413,193 L 1418,203 Q 1432,207 1440,205 L 1440,300 Z"/>
          {/* Layer 3 — Foreground Trees + Rooftop Silhouettes (tips y≈170–185, dark warm brown) */}
          <path fill="url(#grad3)" d="M 0,300 L 0,233 Q 20,230 32,232 L 37,222 L 28,208 L 36,208 L 40,182 L 44,208 L 52,208 L 43,222 L 48,232 Q 78,235 102,228 L 107,218 L 98,198 L 106,198 L 110,170 L 114,198 L 122,198 L 113,218 L 118,228 Q 155,235 182,235 L 187,225 L 178,210 L 186,210 L 190,185 L 194,210 L 202,210 L 193,225 L 198,235 Q 238,238 262,230 L 267,220 L 258,203 L 266,203 L 270,175 L 274,203 L 282,203 L 273,220 L 278,230 Q 310,236 332,235 L 340,235 L 360,235 L 360,213 L 362,213 L 362,200 L 366,200 L 366,213 L 380,213 L 400,190 L 420,213 L 420,235 L 440,235 Q 455,233 472,233 L 477,223 L 468,207 L 476,207 L 480,180 L 484,207 L 492,207 L 483,223 L 488,233 Q 533,237 552,228 L 557,218 L 548,198 L 556,198 L 560,170 L 564,198 L 572,198 L 563,218 L 568,228 Q 612,236 632,235 L 637,225 L 628,210 L 636,210 L 640,185 L 644,210 L 652,210 L 643,225 L 648,235 Q 698,238 712,230 L 717,220 L 708,203 L 716,203 L 720,175 L 724,203 L 732,203 L 723,220 L 728,230 Q 772,236 792,232 L 797,222 L 788,208 L 796,208 L 800,182 L 804,208 L 812,208 L 803,222 L 808,232 Q 840,236 862,235 L 870,235 L 890,235 L 890,213 L 892,213 L 892,200 L 896,200 L 896,213 L 910,213 L 930,190 L 950,213 L 950,235 L 970,235 Q 985,233 1002,233 L 1007,223 L 998,207 L 1006,207 L 1010,180 L 1014,207 L 1022,207 L 1013,223 L 1018,233 Q 1065,237 1082,228 L 1087,218 L 1078,200 L 1086,200 L 1090,172 L 1094,200 L 1102,200 L 1093,218 L 1098,228 Q 1142,237 1167,235 L 1172,225 L 1163,210 L 1171,210 L 1175,183 L 1179,210 L 1187,210 L 1178,225 L 1183,235 Q 1233,238 1257,230 L 1262,220 L 1253,203 L 1261,203 L 1265,175 L 1269,203 L 1277,203 L 1268,220 L 1273,230 Q 1323,237 1347,233 L 1352,223 L 1343,207 L 1351,207 L 1355,180 L 1359,207 L 1367,207 L 1358,223 L 1363,233 Q 1395,237 1412,228 L 1417,218 L 1408,198 L 1416,198 L 1420,170 L 1424,198 L 1432,198 L 1423,218 L 1428,228 Q 1435,231 1440,230 L 1440,300 Z"/>
          {/* Layer 4 — Ground Strip (solid #1f2937, blends into WhyUs) */}
          <path fill="#1f2937" d="M 0,300 L 0,248 Q 120,240 240,245 Q 360,250 480,242 Q 600,238 720,245 Q 840,250 960,243 Q 1080,238 1200,245 Q 1320,250 1440,243 L 1440,300 Z"/>
        </svg>
      </div>
    </div>
  );
};