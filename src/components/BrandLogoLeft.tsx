export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center gap-2 group">
      <img 
        src="/logo.png"
        alt="GlowChill Logo"
        className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const fallback = document.createElement('span');
          fallback.className = 'text-2xl font-bold text-primary';
          fallback.textContent = 'GlowChill';
          e.currentTarget.parentElement!.appendChild(fallback);
        }}
      />
    </a>
  )
}