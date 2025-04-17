/**
 * Tronque un texte à une longueur maximale et ajoute "..." si le texte dépasse cette limite.
 *
 * @param text - Le texte à tronquer
 * @param maxLength - Le nombre maximum de caractères autorisés (par défaut : 100)
 * @returns Le texte tronqué avec "..." si nécessaire
 */
export function truncateText(text: string, maxLength: number = 100): string {
    // Si le texte est plus court ou égal à la limite, on le retourne tel quel
    if (text.length <= maxLength) return text;
  
    // Sinon, on découpe le texte à la longueur max, on retire les espaces superflus, et on ajoute "..."
    return text.slice(0, maxLength).trim() + '...';
  }
  