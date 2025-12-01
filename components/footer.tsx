export function Footer() {
  return (
    <footer className="border-t border-purple-200/50 bg-gradient-to-b from-white to-purple-50/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                P
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                PathZ
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Gen Z Career Navigator</p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/assessment" className="hover:text-blue-600 transition-colors duration-300 font-medium">
                  Assessment
                </a>
              </li>
              <li>
                <a href="/career-explorer" className="hover:text-blue-600 transition-colors duration-300 font-medium">
                  Career Explorer
                </a>
              </li>
              <li>
                <a href="/learning-roadmap" className="hover:text-blue-600 transition-colors duration-300 font-medium">
                  Learning Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300 font-medium">
                  CV & Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300 font-medium">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-200/50 pt-8">
          <p className="text-center text-sm text-muted-foreground">© 2025 PathZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
