import React from 'react';
import { Rocket, Mail, MapPin, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded-lg">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">VenTech</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              المنصة الرائدة لدعم الابتكار وريادة الأعمال في البيئة الجامعية. نساعدك لتحويل فكرتك إلى واقع.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><NavLink to="/about" className="hover:text-primary transition-colors">عن المسابقة</NavLink></li>
              <li><NavLink to="/stages" className="hover:text-primary transition-colors">الجدول الزمني</NavLink></li>
              <li><NavLink to="/awards" className="hover:text-primary transition-colors">الجوائز</NavLink></li>
              <li><NavLink to="/register" className="hover:text-primary transition-colors">التسجيل</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@ventech-edu.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>مركز الابتكار، المبنى الرئيسي</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social (Static) */}
          <div>
            <h3 className="text-white font-bold mb-4">اشترك في النشرة</h3>
            <p className="text-gray-400 text-xs mb-3">احصل على آخر أخبار المسابقة ومواعيد ورش العمل.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-dark-800 border border-dark-700 text-white text-sm rounded-md px-3 py-2 w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary-dark text-white p-2 rounded-md transition-colors">
                <Rocket className="h-4 w-4 transform rotate-45" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} VenTech Competition. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;