import { Download, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 text-white">Siyad Muhsin K</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/siyad_resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 border border-green-600 hover:border-green-400"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Crafted with <Heart size={16} className="text-green-500 fill-green-500/20" /> by Siyad Muhsin K
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}