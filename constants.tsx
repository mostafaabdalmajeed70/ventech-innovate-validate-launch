import { 
  Rocket, 
  Lightbulb, 
  Target, 
  Users, 
  Award, 
  Cpu, 
  Zap, 
  Presentation, 
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { NavItem, Stage, FeatureCard, Award as AwardType } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', path: '/' },
  { label: 'عن المسابقة', path: '/about' },
  { label: 'المراحل', path: '/stages' },
  { label: 'معرض فينتك', path: '/venue' },
  { label: 'التحكيم والجوائز', path: '/awards' },
  { label: 'سجل الآن', path: '/register' },
];

export const HERO_CONTENT = {
  title: 'VenTech',
  subtitle: 'ابتكار. تحقق. انطلاق',
  description: 'حيث تتحول الأفكار الجامعية الطموحة إلى شركات تقنية ناشئة. انضم إلينا في رحلة ريادة الأعمال وصناعة المستقبل.',
  cta: 'سجل مشروعك الآن',
};

export const CURRENT_STAGE_ID = 2; // Indicates the current active stage (e.g., Bootcamp)

export const COMPETITION_STAGES: Stage[] = [
  {
    id: 1,
    title: 'التسجيل والقبول',
    date: '1 - 15 أكتوبر',
    description: 'تقديم الأفكار المبدئية وتعبئة نموذج الاشتراك عبر الموقع الإلكتروني.',
    icon: Users,
  },
  {
    id: 2,
    title: 'المعسكر التدريبي',
    date: '20 - 25 أكتوبر',
    description: 'ورش عمل مكثفة حول بناء نموذج العمل التجاري وتطوير النموذج الأولي (MVP).',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'تطوير المشاريع',
    date: '1 - 20 نوفمبر',
    description: 'فترة توجيه (Mentorship) مع خبراء تقنيين ورواد أعمال لتحسين المشاريع.',
    icon: Cpu,
  },
  {
    id: 4,
    title: 'معرض فينتك (VenTech Expo)',
    date: '25 نوفمبر',
    description: 'عرض المشاريع أمام الجمهور، المستثمرين، والشركاء الصناعيين.',
    icon: Presentation,
  },
  {
    id: 5,
    title: 'الحفل الختامي',
    date: '26 نوفمبر',
    description: 'إعلان الفائزين وتوزيع الجوائز وفرص الاحتضان.',
    icon: Award,
  },
];

export const EXPO_FEATURES: FeatureCard[] = [
  {
    title: 'رواد الأعمال',
    description: 'عرض ابتكاراتهم والحصول على تغذية راجعة مباشرة من الخبراء.',
    icon: Rocket,
  },
  {
    title: 'المستثمرون',
    description: 'فرصة لاكتشاف المواهب الواعدة والمشاريع القابلة للاستثمار المبكر.',
    icon: Briefcase,
  },
  {
    title: 'القطاع الصناعي',
    description: 'بحث سبل التعاون وتبني الحلول التقنية المبتكرة من الطلبة.',
    icon: Zap,
  },
];

export const JUDGING_CRITERIA: FeatureCard[] = [
  {
    title: 'الابتكار',
    description: 'مدى جدة الفكرة وتميزها عن الحلول الموجودة في السوق.',
    icon: Lightbulb,
  },
  {
    title: 'القابلية للتطبيق',
    description: 'جدوى تنفيذ المشروع من الناحية التقنية والاقتصادية.',
    icon: CheckCircle2,
  },
  {
    title: 'الأثر',
    description: 'القيمة المضافة للمجتمع أو السوق المستهدف.',
    icon: Target,
  },
  {
    title: 'الجودة التقنية',
    description: 'متانة البناء التقني وجودة النموذج الأولي المعروض.',
    icon: Cpu,
  },
];

export const AWARDS: AwardType[] = [
  {
    title: 'المركز الأول',
    description: 'جائزة مالية + فرصة احتضان كاملة',
    value: '50,000 ر.س',
  },
  {
    title: 'المركز الثاني',
    description: 'جائزة مالية + توجيه استشاري',
    value: '30,000 ر.س',
  },
  {
    title: 'المركز الثالث',
    description: 'جائزة مالية + خدمات سحابية',
    value: '15,000 ر.س',
  },
];

export const PARTNERS = [
  { name: 'جامعة الدلتا', type: 'شريك أكاديمي' },
  { name: 'صندوق الابتكار', type: 'شريك استراتيجي' },
  { name: 'TechHub', type: 'شريك تقني' },
  { name: 'StartUp MENA', type: 'مسرعة أعمال' },
  { name: 'Vision VC', type: 'شريك استثماري' },
];