import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  MessageSquare, 
  Send, 
  Phone, 
  Copy, 
  Check, 
  Upload, 
  Heart,
  Pin,
  ArrowRight
} from 'lucide-react';
import { Github, Linkedin, Instagram } from '../icons/SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection = () => {
  const { personal } = portfolioData;

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedWA, setCopiedWA] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Live Comments State (matching video frames 028 & 030, stored in localStorage)
  const defaultComments = [
    {
      id: 1,
      name: "Al-mutasim Bihablillah A",
      initial: "A",
      isPinned: true,
      message: "Terima kasih sudah mampir di portfolio saya! Jangan ragu untuk meninggalkan pesan atau feedback.",
      likes: 5,
      isLiked: false
    },
    {
      id: 2,
      name: "Visitor",
      initial: "V",
      isPinned: false,
      message: "Desain dark minimalist-nya sangat clean dan profesional bang!",
      likes: 2,
      isLiked: false
    }
  ];

  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem('almutasim_comments');
      return saved ? JSON.parse(saved) : defaultComments;
    } catch {
      return defaultComments;
    }
  });

  const [commentForm, setCommentForm] = useState({
    name: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {}

      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 700);
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentForm.name.trim() || !commentForm.comment.trim()) return;

    const newComment = {
      id: Date.now(),
      name: commentForm.name.trim(),
      initial: commentForm.name.trim().charAt(0).toUpperCase(),
      isPinned: false,
      message: commentForm.comment.trim(),
      likes: 0,
      isLiked: false
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    try {
      localStorage.setItem('almutasim_comments', JSON.stringify(updated));
    } catch {}

    setCommentForm({ name: '', comment: '' });
  };

  const toggleLike = (id) => {
    const updated = comments.map(c => {
      if (c.id === id) {
        return {
          ...c,
          likes: c.isLiked ? c.likes - 1 : c.likes + 1,
          isLiked: !c.isLiked
        };
      }
      return c;
    });
    setComments(updated);
    try {
      localStorage.setItem('almutasim_comments', JSON.stringify(updated));
    } catch {}
  };

  const copyWA = () => {
    navigator.clipboard.writeText(personal.whatsapp);
    setCopiedWA(true);
    setTimeout(() => setCopiedWA(false), 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Top Header from video frame 028 */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs sm:text-sm text-slate-400">
            Have something in mind? Send a message and let's connect.
          </p>
        </div>

        {/* 2 Big Cards Layout from video frame 028 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CARD: Hubungi Saya from video frame 028 & 030 */}
          <div className="lg:col-span-6 ref-card p-6 sm:p-8 space-y-6 text-left">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                Hubungi Saya
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Feel free to reach out if you want to collaborate, discuss ideas, or simply say hello.
              </p>
            </div>

            {submitSuccess && (
              <div className="p-3 rounded-xl bg-white/[0.05] border border-white/20 text-xs text-slate-200">
                Pesan Anda berhasil dikirim! Terima kasih telah menghubungi saya.
              </div>
            )}

            {/* Inputs with leading icons matching frame 028 */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="relative">
                <MessageSquare className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              {/* Send Message Button matching video frame 030 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl ref-btn-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>

            {/* Quick Action WhatsApp & Email Buttons as requested in user prompt */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/25 flex items-center justify-center gap-2 text-xs font-mono text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={personal.emailUrl}
                className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/25 flex items-center justify-center gap-2 text-xs font-mono text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Connect With Me section from video frames 030 & 032 */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <span className="text-xs font-mono text-slate-400 block">
                Connect With Me
              </span>

              {/* LinkedIn Row */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-slate-300" />
                  <div>
                    <div className="text-xs font-bold text-white">LinkedIn</div>
                    <div className="text-[10px] text-slate-400">@al-mutasim-bihablillah</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* WhatsApp & Email Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp Info */}
                <div className="p-3.5 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold text-white">WhatsApp</div>
                      <a href={personal.whatsappUrl} target="_blank" rel="noreferrer" className="text-[10px] font-mono text-slate-400 hover:text-white block">
                        {personal.whatsapp}
                      </a>
                    </div>
                  </div>
                  <button onClick={copyWA} title="Copy" className="p-1.5 text-slate-400 hover:text-white cursor-pointer">
                    {copiedWA ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email Info */}
                <div className="p-3.5 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-bold text-white">Email</div>
                      <a href={personal.emailUrl} className="text-[10px] font-mono text-slate-400 hover:text-white block truncate">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button onClick={copyEmail} title="Copy" className="p-1.5 text-slate-400 hover:text-white cursor-pointer shrink-0">
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Instagram & GitHub */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 flex items-center gap-2.5 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <div>
                    <div className="text-xs font-bold text-white">Instagram</div>
                    <div className="text-[10px] text-slate-400">@mutasimbillah</div>
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 flex items-center gap-2.5 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <div>
                    <div className="text-xs font-bold text-white">GitHub</div>
                    <div className="text-[10px] text-slate-400">@mutasimbillah</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Comments from video frames 028, 030, 032 */}
          <div className="lg:col-span-6 ref-card p-6 sm:p-8 space-y-6 text-left">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                Comments
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Leave your thoughts here
              </p>
            </div>

            {/* Comment Form matching video frame 028 */}
            <form onSubmit={handlePostComment} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={commentForm.name}
                onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-colors"
              />

              <textarea
                required
                rows="3"
                placeholder="Your Comment"
                value={commentForm.comment}
                onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />

              {/* Upload Image pill from frame 028 */}
              <div className="px-4 py-2.5 rounded-xl bg-[#141414] border border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Image (Optional)</span>
              </div>

              {/* Post Comment Button from frame 028 */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 text-xs sm:text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                Post Comment
              </button>
            </form>

            {/* Comments List matching video frames 030 & 032 */}
            <div className="space-y-3 pt-3 border-t border-white/5 max-h-[380px] overflow-y-auto pr-1">
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="p-4 rounded-2xl bg-[#141414] border border-white/5 space-y-2 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-white">
                        {c.initial}
                      </div>
                      <span className="text-xs font-bold text-white font-mono">{c.name}</span>
                      {c.isPinned && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider uppercase bg-purple-900/60 text-purple-300 border border-purple-500/30 flex items-center gap-1">
                          <Pin className="w-2.5 h-2.5" />
                          PINNED
                        </span>
                      )}
                    </div>

                    {/* Like button */}
                    <button
                      onClick={() => toggleLike(c.id)}
                      className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <Heart className={`w-3.5 h-3.5 ${c.isLiked ? 'text-red-400 fill-red-400' : ''}`} />
                      <span>{c.likes}</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pl-9">
                    {c.message}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
