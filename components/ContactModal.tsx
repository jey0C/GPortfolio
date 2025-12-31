import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Github, Linkedin, Instagram, Facebook, Mail, Copy, Check } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = "cruzgiovanni90@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-stone-200/60 dark:bg-black/60 backdrop-blur-sm transition-colors"
      />

      {/* Modal Card */}
      <motion.div 
        initial={{ scale: 0.5, opacity: 0, rotate: -5, y: 50 }}
        animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotate: 5, y: 50 }}
        transition={{ 
          type: "spring", 
          damping: 14, 
          stiffness: 200,
          mass: 0.8 
        }}
        className="relative bg-white dark:bg-stone-900 w-full max-w-md rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-stone-100 dark:border-stone-800">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50">Get in touch</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          
          {/* Email Section */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-400">Email</label>
            <div className="flex items-center gap-2 p-3 bg-stone-50 dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 group transition-colors focus-within:border-blue-500">
              <Mail className="w-5 h-5 text-stone-400" />
              <span className="flex-grow font-mono text-sm text-stone-700 dark:text-stone-300 truncate select-all">{email}</span>
              <button 
                onClick={handleCopy}
                className="p-2 text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                title="Copy email"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </div>
            <a 
               href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
               target="_blank"
               rel="noopener noreferrer"
               className="text-sm font-medium text-blue-500 hover:underline inline-flex items-center gap-1"
            >
              Open in Gmail &rarr;
            </a>
          </div>

          {/* Socials Section */}
          <div className="space-y-4">
             <label className="text-xs font-bold uppercase tracking-wider text-stone-400">Socials</label>
             <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: Github, href: "https://github.com/jey0C", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/giovanni-cruz-a06852278/", label: "LinkedIn" },
                  { icon: Instagram, href: "https://www.instagram.com/jeyo.cruz/", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/giovanni.cruz.5477272", label: "Facebook" },
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800 border border-transparent hover:border-stone-200 dark:hover:border-stone-700 transition-all group"
                  >
                    <social.icon size={24} className="text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors" />
                    <span className="text-[10px] font-medium text-stone-500 uppercase tracking-wider">{social.label}</span>
                  </a>
                ))}
             </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ContactModal;