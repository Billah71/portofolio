import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center p-6 text-center font-mono">
          <div className="p-8 rounded-2xl bg-neutral-900 border border-white/10 max-w-lg space-y-4">
            <h1 className="text-xl font-bold text-red-400">Terjadi Kendala Tampilan</h1>
            <p className="text-xs text-slate-300">
              {this.state.error?.message || "Error tidak diketahui"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs cursor-pointer hover:bg-slate-200"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
