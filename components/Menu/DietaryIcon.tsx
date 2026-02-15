import type { DietaryFlag } from '@/data/types';
import styles from './DietaryIcon.module.css';

interface DietaryIconProps {
  flag: DietaryFlag;
  size?: 'small' | 'medium';
}

const iconConfig: Record<
  DietaryFlag,
  { label: string; abbrev: string; className: string }
> = {
  vegetarian: {
    label: 'Vegetarian',
    abbrev: 'V',
    className: styles.vegetarian,
  },
  'gluten-free': {
    label: 'Gluten-Free',
    abbrev: 'GF',
    className: styles.glutenFree,
  },
  spicy: {
    label: 'Spicy',
    abbrev: 'S',
    className: styles.spicy,
  },
};

export default function DietaryIcon({ flag, size = 'small' }: DietaryIconProps) {
  const config = iconConfig[flag];

  return (
    <span
      className={`${styles.icon} ${config.className} ${styles[size]}`}
      title={config.label}
      aria-label={config.label}
    >
      {config.abbrev}
    </span>
  );
}

interface DietaryIconsProps {
  flags?: DietaryFlag[];
  size?: 'small' | 'medium';
}

export function DietaryIcons({ flags, size = 'small' }: DietaryIconsProps) {
  if (!flags || flags.length === 0) return null;

  return (
    <span className={styles.iconGroup}>
      {flags.map((flag) => (
        <DietaryIcon key={flag} flag={flag} size={size} />
      ))}
    </span>
  );
}
