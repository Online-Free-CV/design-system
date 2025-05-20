export function formatDate(dateStr?: string): string | null {
    if (!dateStr || dateStr.toLowerCase() === 'present') return null;
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  }
  
  export function calculateDuration(start: string, end?: string): string {
    const startDate = new Date(start);
    const endDate = !end || end.toLowerCase() === 'present' ? new Date() : new Date(end);
  
    let months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
  
    months = Math.max(0, months); // Prevent negative durations
  
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
  
    const yearStr = years ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const monthStr = remMonths ? `${remMonths} mo${remMonths > 1 ? 's' : ''}` : '';
  
    return [yearStr, monthStr].filter(Boolean).join(' ');
  }
  