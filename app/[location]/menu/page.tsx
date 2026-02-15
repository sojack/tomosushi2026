import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getLocation, locations } from '@/data/locations';
import { getMenuData } from '@/data/menu';
import {
  MenuNav,
  FloatingNav,
  MenuItem,
  MenuItemList,
  SubcategorySection,
} from '@/components/Menu';
import styles from './page.module.css';

interface MenuPageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.id,
  }));
}

export async function generateMetadata({
  params,
}: MenuPageProps): Promise<Metadata> {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    return {};
  }

  return {
    title: `Menu - ${location.name}`,
    description: `View the full menu at Tomo Sushi ${location.name}. Fresh sushi, sashimi, rolls, and Japanese cuisine.`,
  };
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    notFound();
  }

  const menu = getMenuData(location.id);

  return (
    <main id="main-content" className={styles.menuPage}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Menu</h1>
          <p>{location.name} Location</p>
        </div>
      </header>

      <div className={styles.notice}>
        <Image
          src="/images/Halal_logo.png"
          alt="Halal Certified"
          width={80}
          height={80}
          className={styles.halalLogo}
        />
        <p>
          <strong>
            All the chicken served at Tomo Sushi is halal, and almost all of our
            beef menu items are halal as well.
          </strong>{' '}
          Exception: Kalbi (Short Ribs) is not halal. Our unagi sauce contains a
          very small amount of alcohol. If you follow a halal diet and would
          prefer to avoid it, please let us know so we can remove the sauce for
          you. Also, please rest assured that our sushi rice is made with{' '}
          <strong>non-alcohol mirin</strong>, so it is completely safe for you to
          enjoy.
        </p>
      </div>

      <MenuNav categories={menu.menuCategories} />
      <FloatingNav categories={menu.menuCategories} />

      {/* Party Trays */}
      <section id="party-trays" className={styles.section}>
        <h2 className={styles.sectionTitle}>Tray</h2>

        <SubcategorySection
          title="VIP Tray"
          note="The VIP Tray offers an unparalleled sushi experience, featuring only the freshest premium fish, including the luxurious otoro (fatty tuna belly). Prepared fresh upon order, the chef selects the highest quality cuts typically reserved for omakase, ensuring no pre-cutting and no shortcuts. Indulge in this exceptional selection, exclusively at Tomo."
          items={menu.allPartyTrays.vip}
        />

        <SubcategorySection
          title="Deluxe Tray"
          note="For those who want omakase quality without spending a fortune. Not your typical party tray — the perfect balance of premium and approachable."
          items={menu.allPartyTrays.deluxe}
          priceLayout="grid"
        />

        <SubcategorySection title="Regular Tray" items={menu.allPartyTrays.regular} priceLayout="grid" />
      </section>

      {/* Rolls */}
      <section id="rolls" className={styles.section}>
        <h2 className={styles.sectionTitle}>Rolls</h2>

        <SubcategorySection title="Signature Rolls" items={menu.allRolls.signature} />
        <SubcategorySection title="Veggie Rolls" items={menu.allRolls.vegetarian} />
        <SubcategorySection title="Basic Rolls" items={menu.allRolls.basic} />
      </section>

      {/* Roll Combinations */}
      <section id="combos" className={styles.section}>
        <h2 className={styles.sectionTitle}>Roll Combination</h2>
        <div className={styles.itemGrid}>
          {menu.rollCombos.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* A La Carte */}
      <section id="alacarte" className={styles.section}>
        <h2 className={styles.sectionTitle}>A La Carte</h2>
        <p className={styles.sectionNote}>Sushi 2 pcs, Sashimi 3 pcs</p>
        <div className={styles.alaCarteContainer}>
          <MenuItemList items={menu.alaCarteItems} />
        </div>
      </section>

      {/* Appetizers */}
      <section id="appetizers" className={styles.section}>
        <h2 className={styles.sectionTitle}>Appetizers</h2>
        <div className={styles.itemGrid}>
          {menu.appetizers.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Dinner */}
      <section id="dinner" className={styles.section}>
        <h2 className={styles.sectionTitle}>Dinner</h2>

        <SubcategorySection
          title="Sushi & Sashimi Combos"
          note="Served with miso soup, garden salad"
          items={menu.allDinner.sushiSashimi}
        />

        <SubcategorySection
          title="Donburi"
          note="Served with miso soup, garden salad"
          items={menu.allDinner.donburi}
        />

        <SubcategorySection
          title="Dinner Entrees"
          note="Served with miso soup, garden salad"
          items={menu.allDinner.entrees}
        />

        <SubcategorySection
          title="Kitchen Dinner Combo"
          note="Served with miso soup, garden salad & rice"
          items={menu.allDinner.combos}
        />
      </section>

      {/* Noodle */}
      <section id="noodle" className={styles.section}>
        <h2 className={styles.sectionTitle}>Noodle</h2>
        <div className={styles.itemGrid}>
          {menu.noodles.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Soup */}
      <section id="soup" className={styles.section}>
        <h2 className={styles.sectionTitle}>Soup</h2>
        <div className={styles.itemGrid}>
          {menu.soups.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Salad */}
      <section id="salad" className={styles.section}>
        <h2 className={styles.sectionTitle}>Salad</h2>
        <div className={styles.itemGrid}>
          {menu.salads.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Lunch */}
      <section id="lunch" className={styles.section}>
        <h2 className={styles.sectionTitle}>Lunch Menu</h2>
        <p className={styles.sectionNote}>{menu.allLunch.lunchHoursNote}</p>

        <SubcategorySection
          title="Sashimi & Sushi Lunch"
          note="Served with miso soup and salad"
          items={menu.allLunch.sashimiSushi}
        />

        <div className={styles.promoSection}>
          <h3 className={styles.subcategoryTitle}>{menu.allLunch.rollSetPromo.title}</h3>
          <p className={styles.sectionNote}>{menu.allLunch.rollSetPromo.note}</p>
          <p className={styles.promoText}>
            <strong>{menu.allLunch.rollSetPromo.description}</strong>
            <br />
            {menu.allLunch.rollSetPromo.details}
          </p>
        </div>

        <SubcategorySection
          title="Udon Set Lunch"
          items={menu.allLunch.udonSet}
        />

        <SubcategorySection
          title="Tomo Lunch"
          note="Served with miso soup, salad and rice"
          items={menu.allLunch.tomoLunch}
        />

        <SubcategorySection
          title="Tomo Lunch Combo"
          note="Served with miso soup & salad"
          items={menu.allLunch.tomoLunchCombo}
        />
      </section>

      {/* Extras */}
      <section id="extras" className={styles.section}>
        <h2 className={styles.sectionTitle}>Extras</h2>
        <div className={styles.extrasGrid}>
          {menu.extras.map((item) => (
            <div key={item.id} className={styles.extraItem}>
              <div className={styles.extraInfo}>
                <span className={styles.extraName}>
                  {item.name} {item.size && `(${item.size})`}
                  {item.dietary?.includes('vegetarian') && (
                    <span className={styles.vegIcon} title="Vegetarian">V</span>
                  )}
                </span>
                {item.description && (
                  <span className={styles.extraDescription}>{item.description}</span>
                )}
              </div>
              <span className={styles.extraPrice}>${item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Drinks */}
      <section id="drinks" className={styles.section}>
        <h2 className={styles.sectionTitle}>Drinks</h2>

        <div className={styles.drinksSection}>
          <h3 className={styles.drinkCategory}>White Wine</h3>
          <div className={styles.drinksList}>
            {menu.allDrinks.whiteWine.map((drink) => (
              <div key={drink.id} className={styles.drinkItem}>
                <div className={styles.drinkInfo}>
                  <span className={styles.drinkName}>{drink.name}</span>
                  {drink.variety && (
                    <span className={styles.drinkVariety}>{drink.variety}</span>
                  )}
                </div>
                <div className={styles.drinkPrices}>
                  {drink.glassPrice && <span>5oz Glass: ${drink.glassPrice}</span>}
                  {drink.halfLiterPrice && <span>½L: ${drink.halfLiterPrice}</span>}
                  {drink.bottlePrice && <span>Bottle: ${drink.bottlePrice}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.drinksSection}>
          <h3 className={styles.drinkCategory}>Red Wine</h3>
          <div className={styles.drinksList}>
            {menu.allDrinks.redWine.map((drink) => (
              <div key={drink.id} className={styles.drinkItem}>
                <div className={styles.drinkInfo}>
                  <span className={styles.drinkName}>{drink.name}</span>
                  {drink.variety && (
                    <span className={styles.drinkVariety}>{drink.variety}</span>
                  )}
                </div>
                <div className={styles.drinkPrices}>
                  {drink.glassPrice && <span>5oz Glass: ${drink.glassPrice}</span>}
                  {drink.halfLiterPrice && <span>½L: ${drink.halfLiterPrice}</span>}
                  {drink.bottlePrice && <span>Bottle: ${drink.bottlePrice}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.drinksSection}>
          <h3 className={styles.drinkCategory}>Beer</h3>
          <div className={styles.beerGrid}>
            {menu.allDrinks.beer.map((drink) => (
              <div key={drink.id} className={styles.beerItem}>
                <span className={styles.drinkName}>{drink.name}</span>
                {drink.variety && (
                  <span className={styles.drinkVariety}>{drink.variety}</span>
                )}
                <span className={styles.beerPrice}>${drink.singlePrice}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.drinksSection}>
          <h3 className={styles.drinkCategory}>Cold Sake</h3>
          <div className={styles.drinksList}>
            {menu.allDrinks.coldSake.map((drink) => (
              <div key={drink.id} className={styles.drinkItem}>
                <div className={styles.drinkInfo}>
                  <span className={styles.drinkName}>{drink.name}</span>
                  {drink.variety && (
                    <span className={styles.drinkVariety}>{drink.variety}</span>
                  )}
                </div>
                <div className={styles.drinkPrices}>
                  {drink.singlePrice && <span>${drink.singlePrice}</span>}
                  {drink.glassPrice && <span>5oz: ${drink.glassPrice}</span>}
                  {drink.halfLiterPrice && <span>500ml: ${drink.halfLiterPrice}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.drinksSection}>
          <h3 className={styles.drinkCategory}>Hot Sake</h3>
          <div className={styles.drinksList}>
            {menu.allDrinks.hotSake.map((drink) => (
              <div key={drink.id} className={styles.drinkItem}>
                <div className={styles.drinkInfo}>
                  <span className={styles.drinkName}>{drink.name}</span>
                </div>
                <div className={styles.drinkPrices}>
                  {drink.glassPrice && <span>Small (4oz): ${drink.glassPrice}</span>}
                  {drink.halfLiterPrice && <span>Medium (10oz): ${drink.halfLiterPrice}</span>}
                  {drink.bottlePrice && <span>Pot (720ml): ${drink.bottlePrice}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.drinksSection}>
          <h3 className={styles.drinkCategory}>Non-Alcoholic</h3>
          <div className={styles.beerGrid}>
            {menu.allDrinks.nonAlcoholic.map((drink) => (
              <div key={drink.id} className={styles.beerItem}>
                <span className={styles.drinkName}>{drink.name}</span>
                {drink.variety && (
                  <span className={styles.drinkVariety}>{drink.variety}</span>
                )}
                <span className={styles.beerPrice}>${drink.singlePrice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section id="desserts" className={styles.section}>
        <h2 className={styles.sectionTitle}>Desserts</h2>
        <div className={styles.itemGrid}>
          {menu.desserts.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
