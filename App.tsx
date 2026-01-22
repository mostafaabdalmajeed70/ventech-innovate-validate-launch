import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import { 
  HERO_CONTENT, 
  COMPETITION_STAGES, 
  EXPO_FEATURES, 
  JUDGING_CRITERIA, 
  AWARDS,
  PARTNERS,
  CURRENT_STAGE_ID
} from './constants';
import { CheckCircle2, Calendar, MapPin, Users, Lightbulb, Rocket, Building2, AlertCircle } from 'lucide-react';
import StageCard from './components/StageCard';
import { RegistrationFormData } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Page Components ---

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
            <span className="text-primary font-medium text-sm tracking-wide">النسخة الأولى 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 leading-tight">
            {HERO_CONTENT.title}
            <span className="block text-3xl md:text-5xl mt-4 text-primary font-bold">{HERO_CONTENT.subtitle}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {HERO_CONTENT.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2 hover:scale-105">
              <Rocket className="w-5 h-5" />
              {HERO_CONTENT.cta}
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg transition-all backdrop-blur-sm hover:scale-105">
              اكتشف المزيد
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
            {[
              { id: 'participants', label: 'مشارك', value: '+500' },
              { id: 'workshops', label: 'ورشة عمل', value: '12' },
              { id: 'prize', label: 'جائزة', value: '100K' },
              { id: 'startups', label: 'مشروع ناشئ', value: '+20' },
            ].map((stat) => (
              <div key={stat.id}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About Snippet */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">لماذا VenTech؟</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                في عالم يتسارع فيه التطور التقني، تأتي VenTech كجسر يربط بين الإبداع الأكاديمي وواقع السوق. نحن لا نبحث فقط عن أفكار، بل نبحث عن حلول قادرة على تغيير المستقبل.
              </p>
              <ul className="space-y-4">
                {[
                  { id: 'innovation-env', text: 'بيئة محفزة للابتكار والتفكير الإبداعي' },
                  { id: 'investor-contact', text: 'تواصل مباشر مع المستثمرين وقادة الصناعة' },
                  { id: 'awards-support', text: 'جوائز قيمة ودعم لوجستي للمشاريع الفائزة' }
                ].map((item) => (
                  <li key={item.id} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-dark-900 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
                <Lightbulb className="w-20 h-20 text-white opacity-20" />
                <span className="absolute text-white font-bold text-lg">مساحة للإبداع</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const About: React.FC = () => {
  return (
    <section className="py-24 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">عن المسابقة</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">رؤيتنا ورسالتنا لتمكين الجيل القادم من رواد الأعمال</p>
        </div>

        {/* Vision/Mission Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-dark-800 p-8 rounded-2xl border border-white/5">
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">الرؤية</h3>
            <p className="text-gray-400 leading-relaxed">
              أن نكون المنصة الجامعية الأولى إقليمياً في اكتشاف وتطوير الشركات التقنية الناشئة من الحرم الجامعي.
            </p>
          </div>
          <div className="bg-dark-800 p-8 rounded-2xl border border-white/5">
            <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">الرسالة</h3>
            <p className="text-gray-400 leading-relaxed">
              توفير بيئة متكاملة تدعم الطلاب بالأدوات، المعرفة، والتوجيه اللازم لتحويل مشاريع التخرج والأفكار البحثية إلى منتجات تجارية.
            </p>
          </div>
          <div className="bg-dark-800 p-8 rounded-2xl border border-white/5">
            <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">الجمهور المستهدف</h3>
            <p className="text-gray-400 leading-relaxed">
              طلاب الجامعات، الباحثين، حديثي التخرج، وكل من يملك شغفاً بالتقنية وريادة الأعمال داخل المجتمع الأكاديمي.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">شركاء النجاح</h2>
            <p className="text-gray-400">نفخر بشراكتنا مع نخبة من المؤسسات الداعمة للابتكار</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="bg-white/5 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors group cursor-default hover:border-primary/30">
                 <div className="w-16 h-16 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <Building2 className="w-8 h-8 text-gray-500 group-hover:text-primary transition-colors" />
                 </div>
                 <h4 className="text-white font-bold text-sm">{partner.name}</h4>
                 <span className="text-xs text-gray-500 mt-2 block">{partner.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stages: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">مراحل المسابقة</h2>
          <p className="text-gray-400">رحلة متكاملة من الفكرة إلى الإطلاق</p>
        </div>

        {/* Visual Progress Stepper */}
        <div className="mb-24 relative px-4" dir="rtl">
          {/* Progress Bar Track */}
          <div className="absolute top-5 md:top-9 left-0 right-0 h-1 bg-gray-800 -z-10 mx-6 md:mx-12"></div>
          
          {/* Active Progress Fill */}
          <div 
            className="absolute top-5 md:top-9 right-0 h-1 bg-gradient-to-l from-primary to-secondary -z-10 transition-all duration-1000 ease-in-out mx-6 md:mx-12"
            style={{ 
              width: `${Math.max(0, Math.min(100, ((CURRENT_STAGE_ID - 1) / (COMPETITION_STAGES.length - 1)) * 100))}%` 
            }}
          ></div>

          <div className="flex justify-between items-start relative w-full">
            {COMPETITION_STAGES.map((stage) => {
               const isCompleted = stage.id < CURRENT_STAGE_ID;
               const isCurrent = stage.id === CURRENT_STAGE_ID;
               
               let borderClass = 'border-gray-800 text-gray-600';
               if (isCompleted) {
                 borderClass = 'border-primary bg-primary text-white scale-105';
               } else if (isCurrent) {
                 borderClass = 'border-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.6)] scale-110 md:scale-125';
               }
               
               let labelOpacity = 'opacity-40';
               if (isCurrent) {
                 labelOpacity = 'opacity-100 transform translate-y-0';
               } else if (isCompleted) {
                 labelOpacity = 'opacity-80';
               }
               
               let displayContent = <span className="text-sm md:text-lg font-bold">{stage.id}</span>;
               if (isCompleted) {
                 displayContent = <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 animate-in zoom-in duration-300" />;
               } else if (isCurrent) {
                 displayContent = <span className="text-sm md:text-lg font-bold animate-pulse">{stage.id}</span>;
               }
               
               return (
                 <div key={stage.id} className="flex flex-col items-center relative group w-full">
                   <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 bg-dark-900 z-10 ${borderClass}`}>
                      {displayContent}
                   </div>
                   
                   {/* Label */}
                   <div className={`mt-4 text-center transition-all duration-500 px-1 ${labelOpacity}`}>
                      <span className={`text-[10px] md:text-sm font-bold block leading-tight ${
                        isCurrent ? 'text-white' : 'text-gray-500'
                      }`}>
                        {stage.title}
                      </span>
                      {isCurrent && (
                        <span className="hidden md:block text-[10px] text-primary mt-1 animate-fade-in-up">
                          المرحلة الحالية
                        </span>
                      )}
                   </div>
                 </div>
               )
            })}
          </div>
        </div>
        
        {/* Timeline List */}
        <div className="relative pl-8 md:pl-0">
          {COMPETITION_STAGES.map((stage, index) => (
            <StageCard key={stage.id} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Venue: React.FC = () => {
  return (
    <section className="py-24 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">معرض VenTech Expo</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ليس مجرد معرض، بل نظام بيئي متكامل يجمع أقطاب الصناعة والابتكار تحت سقف واحد.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="grid gap-6">
              {EXPO_FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
                  <div className="mt-1 bg-white/5 p-2 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-full min-h-[400px]">
             {/* Abstract Representation of Venue */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
             <div className="relative h-full bg-dark-800 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
                <div className="z-10">
                   <MapPin className="w-16 h-16 text-white mx-auto mb-4" />
                   <h3 className="text-2xl font-bold text-white mb-2">القاعة الرئيسية للمؤتمرات</h3>
                   <p className="text-gray-300">جامعة الدلتا للتكنولوجيا</p>
                   <div className="mt-8 flex items-center justify-center gap-2 text-primary font-bold">
                     <Calendar className="w-5 h-5" />
                     <span>25 - 26 نوفمبر 2024</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Awards: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judging Criteria */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">معايير التحكيم</h2>
            <p className="text-gray-400">يتم تقييم المشاريع بناءً على منهجية دقيقة</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JUDGING_CRITERIA.map((crit) => (
              <div key={crit.title} className="bg-dark-800 p-6 rounded-xl border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <crit.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{crit.title}</h3>
                <p className="text-gray-400 text-sm">{crit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">الجوائز والفرص</h2>
            <p className="text-gray-400">تقدير للتميز ودعم للانطلاق</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {/* Second Place */}
            <div className="bg-dark-800 border border-white/10 p-8 rounded-2xl flex flex-col items-center mt-0 md:mt-8">
              <div className="text-gray-300 text-lg font-bold mb-4">{AWARDS[1].title}</div>
              <div className="text-3xl font-bold text-white mb-4">{AWARDS[1].value}</div>
              <p className="text-gray-400 text-center text-sm mb-6">{AWARDS[1].description}</p>
              <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
            </div>

             {/* First Place */}
             <div className="bg-gradient-to-b from-primary/20 to-dark-800 border border-primary/50 p-8 rounded-2xl flex flex-col items-center transform md:-translate-y-4 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <div className="bg-primary text-white text-xs px-3 py-1 rounded-full mb-4">الأفضل</div>
              <div className="text-primary-300 text-xl font-bold mb-4">{AWARDS[0].title}</div>
              <div className="text-4xl font-bold text-white mb-4">{AWARDS[0].value}</div>
              <p className="text-gray-300 text-center text-sm mb-6">{AWARDS[0].description}</p>
              <Rocket className="w-12 h-12 text-primary animate-pulse" />
            </div>

             {/* Third Place */}
             <div className="bg-dark-800 border border-white/10 p-8 rounded-2xl flex flex-col items-center mt-0 md:mt-8">
              <div className="text-amber-700 text-lg font-bold mb-4">{AWARDS[2].title}</div>
              <div className="text-3xl font-bold text-white mb-4">{AWARDS[2].value}</div>
              <p className="text-gray-400 text-center text-sm mb-6">{AWARDS[2].description}</p>
              <div className="w-16 h-1 bg-amber-900 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    teamName: '',
    projectTitle: '',
    leaderName: '',
    email: '',
    phone: '',
    category: 'الذكاء الاصطناعي',
    abstract: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.teamName.trim()) newErrors.teamName = 'يرجى إدخال اسم الفريق';
    if (!formData.projectTitle.trim()) newErrors.projectTitle = 'يرجى إدخال اسم المشروع';
    if (!formData.leaderName.trim()) newErrors.leaderName = 'يرجى إدخال اسم قائد الفريق';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        newErrors.email = 'يرجى إدخال البريد الإلكتروني';
    } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }

    const phoneRegex = /^05\d{8}$/; // Saudi mobile format check (starts with 05 and has 10 digits)
    if (!formData.phone.trim()) {
        newErrors.phone = 'يرجى إدخال رقم الهاتف';
    } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'يرجى إدخال رقم هاتف صحيح (يبدأ بـ 05 ويتكون من 10 أرقام)';
    }

    if (!formData.abstract.trim()) newErrors.abstract = 'يرجى كتابة ملخص الفكرة';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
        setErrors(prev => {
            const newErr = { ...prev };
            delete newErr[name];
            return newErr;
        });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    } else {
      // Scroll to the top of the form if there are errors
      const firstError = document.querySelector('.text-red-500');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (submitted) {
    return (
      <section className="py-32 min-h-screen flex items-center justify-center">
        <div className="bg-dark-800 border border-white/10 p-8 rounded-2xl max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">تم استلام طلبك بنجاح!</h2>
          <p className="text-gray-400 mb-8">سيقوم فريقنا بمراجعة طلبك والتواصل معك عبر البريد الإلكتروني قريباً.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-primary hover:text-white transition-colors underline"
          >
            العودة للصفحة الرئيسية
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">تسجيل مشروع جديد</h2>
          <p className="text-gray-400">املأ النموذج التالي للانضمام إلى مسابقة VenTech</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-dark-800 border border-white/5 p-8 rounded-2xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="teamName" className="block text-sm font-medium text-gray-400 mb-2">اسم الفريق</label>
              <input 
                id="teamName"
                type="text" 
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className={`w-full bg-dark-900 border ${errors.teamName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 ${errors.teamName ? 'focus:ring-red-500 focus:border-red-500' : 'focus:border-primary focus:ring-primary'}`}
                placeholder="اسم الفريق" 
              />
              {errors.teamName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.teamName}</p>}
            </div>
            <div>
              <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-400 mb-2">اسم المشروع</label>
               <input 
                id="projectTitle"
                type="text" 
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                className={`w-full bg-dark-900 border ${errors.projectTitle ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 ${errors.projectTitle ? 'focus:ring-red-500 focus:border-red-500' : 'focus:border-primary focus:ring-primary'}`}
                placeholder="عنوان المشروع المقترح" 
              />
               {errors.projectTitle && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.projectTitle}</p>}
            </div>
          </div>
          
           <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-2">مسار المشاركة</label>
              <select 
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="الذكاء الاصطناعي">الذكاء الاصطناعي</option>
                <option value="إنترنت الأشياء">إنترنت الأشياء</option>
                <option value="التجارة الإلكترونية">التجارة الإلكترونية</option>
                <option value="التقنيات المالية (Fintech)">التقنيات المالية (Fintech)</option>
                <option value="أخرى">أخرى</option>
              </select>
            </div>

          <div>
            <label htmlFor="leaderName" className="block text-sm font-medium text-gray-400 mb-2">اسم قائد الفريق</label>
            <input 
              id="leaderName"
              type="text" 
              name="leaderName"
              value={formData.leaderName}
              onChange={handleChange}
              className={`w-full bg-dark-900 border ${errors.leaderName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 ${errors.leaderName ? 'focus:ring-red-500 focus:border-red-500' : 'focus:border-primary focus:ring-primary'}`}
              placeholder="الاسم الثلاثي" 
            />
            {errors.leaderName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.leaderName}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">البريد الإلكتروني الجامعي</label>
              <input 
                id="email"
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-dark-900 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 ${errors.email ? 'focus:ring-red-500 focus:border-red-500' : 'focus:border-primary focus:ring-primary'}`}
                placeholder="email@university.edu.sa" 
              />
               {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">رقم الهاتف</label>
              <input 
                id="phone"
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-dark-900 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 ${errors.phone ? 'focus:ring-red-500 focus:border-red-500' : 'focus:border-primary focus:ring-primary'}`}
                placeholder="05xxxxxxxx" 
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="abstract" className="block text-sm font-medium text-gray-400 mb-2">ملخص الفكرة (Abstract)</label>
            <textarea 
              id="abstract"
              name="abstract"
              rows={4} 
              value={formData.abstract}
              onChange={handleChange}
              className={`w-full bg-dark-900 border ${errors.abstract ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 ${errors.abstract ? 'focus:ring-red-500 focus:border-red-500' : 'focus:border-primary focus:ring-primary'}`}
              placeholder="اشرح فكرتك باختصار (المشكلة، الحل، القيمة المضافة)..."
            ></textarea>
            {errors.abstract && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.abstract}</p>}
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-bold py-4 rounded-lg shadow-lg transition-all transform hover:scale-[1.01]">
              إرسال طلب التسجيل
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">بإرسال هذا النموذج، أنت توافق على شروط وأحكام المسابقة.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

// --- Main Layout ---

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-900 text-slate-50 font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
};

export default App;