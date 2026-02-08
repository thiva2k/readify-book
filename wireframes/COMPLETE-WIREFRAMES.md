# Readify - Complete Wireframes & Design Documentation

## 📐 Design System Overview

### Color Palette
- **Primary**: #6366f1 (Indigo) - Main brand color, CTAs, links
- **Secondary**: #ec4899 (Pink) - Accents, buttons
- **Accent**: #f59e0b (Amber) - Highlights
- **Text**: #1f2937 (Dark Gray) to #9ca3af (Light Gray)
- **Backgrounds**: #ffffff (White), #f9fafb (Light Gray), #f3f4f6 (Tertiary)

### Typography
- **Primary Font**: Inter (UI elements, body text)
- **Secondary Font**: Merriweather (Quotes, serif accents)
- **Font Sizes**: 
  - H1: 2.5-3rem
  - H2: 2rem  
  - H3: 1.5rem
  - Body: 1rem
  - Small: 0.85-0.9rem

### Spacing Scale
- XS: 0.25rem (4px)
- SM: 0.5rem (8px)
- MD: 1rem (16px)
- LG: 1.5rem (24px)
- XL: 2rem (32px)
- 2XL: 3rem (48px)

### Responsive Breakpoints
- **Mobile**: 0-767px
- **Tablet**: 768-1023px
- **Desktop**: 1024px+

---

## Page 1: Home Page

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ 📚 Readify [Home][Explorer][Tracker][...]  [☰] │ ← Sticky Navigation
├─────────────────────────────────────────────────┤
│                                                 │
│  HERO SECTION (2-column grid)                   │
│  ┌──────────────────┬──────────────────┐       │
│  │ Discover Your    │   [Floating      │       │
│  │ Next Great Read  │    Book 📚 ]     │       │
│  │                  │   Animation       │       │
│  │ ┌──────────────┐ │                  │       │
│  │ │ "Quote text" │ │                  │       │
│  │ │  - Author    │ │                  │       │
│  │ └──────────────┘ │                  │       │
│  │                  │                  │       │
│  │ [Explore Books→] │                  │       │
│  └──────────────────┴──────────────────┘       │
│                                                 │
├─────────────────────────────────────────────────┤
│  AUTHOR OF THE DAY                             │
│  ┌─────┬────────────────────────────────┐      │
│  │ 👤  │ Matt Haig                      │      │
│  │ IMG │ Bio text...                     │      │
│  │     │ [12 Books] [Fiction]           │      │
│  │     │ [View Books →]                 │      │
│  └─────┴────────────────────────────────┘      │
├─────────────────────────────────────────────────┤
│  WHY CHOOSE READIFY?                           │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                  │
│  │🔍  │ │📊  │ │🎵  │ │⭐  │                  │
│  │Card│ │Card│ │Card│ │Card│  (4-col grid)    │
│  └────┘ └────┘ └────┘ └────┘                  │
├─────────────────────────────────────────────────┤
│  NEWSLETTER (Gradient background)              │
│  Stay Updated                                   │
│  [Email Input] [Subscribe Button]              │
├─────────────────────────────────────────────────┤
│  FOOTER (4-column grid)                        │
│  [About] [Links] [More] [Social]              │
│  © 2025 Readify                                │
└─────────────────────────────────────────────────┘
```

### Key Features
- **Rotating Quotes**: JavaScript timer (5s interval), fade transition
- **Author of Day**: Date-based calculation `dayOfYear % authors.length`
- **Newsletter**: Email validation, localStorage, duplicate detection
- **Animations**: Floating book (CSS animation), reveal-on-scroll

### Mobile Adaptation (< 768px)
- Hamburger menu replaces horizontal nav
- Hero becomes single column (hide image)
- Feature cards stack vertically (1 column)
- Footer becomes single column

---

## Page 2: Book Explorer

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ Navigation Bar (same as home)                   │
├─────────────────────────────────────────────────┤
│ BOOK EXPLORER                                   │
│ Discover your next favorite book               │
├─────────────────────────────────────────────────┤
│ [🔍 Search by title or author...]              │
│ Genre: [All Genres ▼]                          │
├─────────────────────────────────────────────────┤
│ BOOKS GRID (4 columns desktop, 2 tablet, 1 mob)│
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│  │   📚   │ │   📚   │ │   📚   │ │   📚   │  │
│  │        │ │        │ │        │ │        │  │
│  │ Title  │ │ Title  │ │ Title  │ │ Title  │  │
│  │ Author │ │ Author │ │ Author │ │ Author │  │
│  │[Genre] │ │[Genre] │ │[Genre] │ │[Genre] │  │
│  └────────┘ └────────┘ └────────┘ └────────┘  │
│  (20 book cards total)                         │
├─────────────────────────────────────────────────┤
│ Footer                                          │
└─────────────────────────────────────────────────┘

MODAL (When book clicked):
┌─────────────────────────────────────────────────┐
│                                           [✕]   │
│  ┌────────┬──────────────────────────────────┐ │
│  │   📚   │ The Midnight Library             │ │
│  │        │ by Matt Haig                      │ │
│  │ Cover  │ [Fiction] [304 pages]            │ │
│  │ Image  │                                   │ │
│  │        │ SYNOPSIS                          │ │
│  │        │ Between life and death...         │ │
│  │        │                                   │ │
│  │        │ SERIES INFORMATION                │ │
│  │        │ Sequels: [List]                  │ │
│  │        │                                   │ │
│  │        │ RATINGS & REVIEWS                │ │
│  │        │ ┌──────────┬────────┬─────────┐ │ │
│  │        │ │ Source   │ Rating │ Reviews │ │ │
│  │        │ ├──────────┼────────┼─────────┤ │ │
│  │        │ │Goodreads │ 4.2/5  │ 850K+   │ │ │
│  │        │ │Amazon    │ 4.4/5  │ 45K+    │ │ │
│  │        │ └──────────┴────────┴─────────┘ │ │
│  └────────┴──────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### Key Features
- **Search**: Real-time filtering on title/author
- **Genre Filter**: Dropdown with 8 genres
- **Modal**: Click card to open, close via X/outside click/Escape key
- **Ratings Table**: HTML table with 3 sources
- **Series Info**: Conditional display (if book has series)

### Interactions
- Book cards: Hover effect (lift + shadow)
- Search: Filter on input event
- Modal: Smooth slide-up animation, backdrop blur

---

## Page 3: Reading Progress Tracker

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ Navigation Bar                                   │
├─────────────────────────────────────────────────┤
│ READING PROGRESS TRACKER                        │
│ Track your reading journey                      │
├─────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────┐ │
│ │ ENTER BOOK DETAILS                          │ │
│ │                                             │ │
│ │ Book Title: [________________]              │ │
│ │ Total Pages: [____]                         │ │
│ │ Pages Read: [____]                          │ │
│ │ Daily Reading Speed: [____] pages/day       │ │
│ │                                             │ │
│ │        [Calculate Progress]                 │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ YOUR READING PROGRESS                       │ │
│ │ "Book Title Here"                           │ │
│ │                                             │ │
│ │ ┌──────┐  ┌──────┐  ┌──────┐               │ │
│ │ │120   │  │400   │  │30%   │               │ │
│ │ │Pages │  │Total │  │Done  │               │ │
│ │ │Read  │  │Pages │  │      │               │ │
│ │ └──────┘  └──────┘  └──────┘               │ │
│ │                                             │ │
│ │ [▰▰▰▰▰▰▱▱▱▱▱▱▱▱▱▱▱▱▱▱] 30%                 │ │
│ │ ^^^^^ Animated progress bar                │ │
│ │                                             │ │
│ │ ┌────────────────────────────────────────┐ │ │
│ │ │ 📅 ESTIMATED COMPLETION                │ │ │
│ │ │ 12 days remaining                      │ │ │
│ │ │ Expected: February 18, 2025            │ │ │
│ │ └────────────────────────────────────────┘ │ │
│ │                                             │ │
│ │ [Save Progress]  [New Book]                │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ SAVED BOOKS                                     │
│ ┌─────────────────────────────────────────────┐ │
│ │ Book 1 - 75% complete                       │ │
│ │ Book 2 - 45% complete                       │ │
│ └─────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────┤
│ Footer                                          │
└─────────────────────────────────────────────────┘
```

### Key Features
- **Calculations**: 
  - Percentage: `(pagesRead / totalPages) * 100`
  - Days: `Math.ceil((totalPages - pagesRead) / dailySpeed)`
  - Date: `new Date(today + daysToComplete)`
- **Progress Bar**: Animated width transition (1s ease)
- **localStorage**: Save multiple books with timestamps
- **Validation**: Pages read ≤ total pages

---

## Page 4: Random Book Recommender

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ Navigation Bar                                   │
├─────────────────────────────────────────────────┤
│ RANDOM BOOK RECOMMENDER                         │
│ Let us suggest your next great read            │
├─────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────┐ │
│ │ WHAT ARE YOU IN THE MOOD FOR?               │ │
│ │                                             │ │
│ │ Select Genre:                               │ │
│ │ [Fantasy            ▼]                      │ │
│ │                                             │ │
│ │ Book Length:                                │ │
│ │ [Medium (250-450)   ▼]                      │ │
│ │                                             │ │
│ │        [Get Recommendation]                 │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ WE RECOMMEND...                      [🔄]   │ │
│ │                                             │ │
│ │ ┌────────┬──────────────────────────────┐  │ │
│ │ │   📚   │ The Name of the Wind         │  │ │
│ │ │        │ by Patrick Rothfuss          │  │ │
│ │ │ Large  │ [Fantasy] [662 pages]        │  │ │
│ │ │ Cover  │                              │  │ │
│ │ │        │ Synopsis text here...        │  │ │
│ │ │        │                              │  │ │
│ │ │        │ [➕ Add to Reading List]     │  │ │
│ │ │        │ [Browse More Books]          │  │ │
│ │ └────────┴──────────────────────────────┘  │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ YOUR READING LIST (3)                          │
│ ┌─────────────────────────────────────────────┐ │
│ │ Book 1 - Author 1           [Remove]        │ │
│ │ Book 2 - Author 2           [Remove]        │ │
│ │ Book 3 - Author 3           [Remove]        │ │
│ │                    [Clear List]             │ │
│ └─────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────┤
│ Footer                                          │
└─────────────────────────────────────────────────┘
```

### Key Features
- **Random Selection**: Filter by genre + length, random from results
- **Pick Again**: Rotation animation on button
- **Reading List**: localStorage, duplicate detection, remove items
- **Algorithm**: `books.filter(match criteria)[Math.random() * length]`

---

## Page 5: Reading Flow

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ Navigation Bar                                   │
├─────────────────────────────────────────────────┤
│ READING FLOW                                    │
│ Create the perfect reading atmosphere           │
├─────────────────────────────────────────────────┤
│ AMBIENT SOUNDS                                  │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐       │
│ │  🌧️   │ │  🔥   │ │  🌊   │ │  🌲   │       │
│ │ Rain  │ │ Fire  │ │ Ocean │ │Forest │       │
│ │  [▶]  │ │  [▶]  │ │  [▶]  │ │  [▶]  │       │
│ │ ━●━━━ │ │ ━●━━━ │ │ ━●━━━ │ │ ━●━━━ │       │
│ └───────┘ └───────┘ └───────┘ └───────┘       │
│ ┌───────┐ ┌───────┐                           │
│ │  ☕   │ │  ⚡   │                           │
│ │ Cafe  │ │Thunder│                           │
│ │  [▶]  │ │  [▶]  │                           │
│ │ ━●━━━ │ │ ━●━━━ │   (6 sound cards)        │
│ └───────┘ └───────┘                           │
│                                                 │
│         [Stop All Sounds]                       │
├─────────────────────────────────────────────────┤
│ TRACK COMPLETED BOOKS                          │
│ ┌─────────────────────────────────────────────┐ │
│ │ Book Title: [________________]              │ │
│ │ Author: [________________]                  │ │
│ │ Date Completed: [2025-02-06]               │ │
│ │ Your Rating: [⭐⭐⭐⭐⭐ ▼]               │ │
│ │                                             │ │
│ │        [Add to Completed Books]             │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ YOUR COMPLETED BOOKS (5)                       │
│ ┌─────────────────────────────────────────────┐ │
│ │ Book Title 1                     [Remove]   │ │
│ │ by Author • ⭐⭐⭐⭐⭐ • Feb 1, 2025      │ │
│ │                                             │ │
│ │ Book Title 2                     [Remove]   │ │
│ │ by Author • ⭐⭐⭐⭐ • Jan 28, 2025        │ │
│ └─────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────┤
│ Footer                                          │
└─────────────────────────────────────────────────┘
```

### Key Features
- **Ambient Sounds**: Web Audio API, oscillators for different patterns
- **Play/Pause**: Toggle button with state management
- **Volume Control**: Range slider (0-100), gain nodes
- **Multiple Sounds**: Can play simultaneously
- **Completed Books**: Form with date picker, star rating, localStorage

---

## Page 6: Feedback

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ Navigation Bar                                   │
├─────────────────────────────────────────────────┤
│ WE'D LOVE TO HEAR FROM YOU                     │
│ Your feedback helps us improve Readify          │
├─────────────────────────────────────────────────┤
│ ┌──────────────────┐  ┌──────────────────────┐ │
│ │ SEND FEEDBACK    │  │ OTHER WAYS TO REACH  │ │
│ │                  │  │                      │ │
│ │ Name *           │  │ 📧 Email             │ │
│ │ [_____________]  │  │ support@readify.com  │ │
│ │ ⚠️ Error here    │  │                      │ │
│ │                  │  │ 💬 Social Media      │ │
│ │ Email *          │  │ @readifyapp          │ │
│ │ [_____________]  │  │                      │ │
│ │                  │  │ ⏰ Response Time     │ │
│ │ Feedback Type *  │  │ 24-48 hours          │ │
│ │ [Suggestion  ▼]  │  │                      │ │
│ │                  │  └──────────────────────┘ │
│ │ Message *        │                           │
│ │ [_____________]  │                           │
│ │ [_____________]  │                           │
│ │ [_____________]  │                           │
│ │                  │                           │
│ │ [Submit Feedback]│                           │
│ └──────────────────┘                           │
│                                                 │
│ OR (after submission):                         │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │              ✅                              │ │
│ │         THANK YOU!                          │ │
│ │ Your feedback has been received             │ │
│ │                                             │ │
│ │       [Submit Another]                      │ │
│ └─────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────┤
│ FREQUENTLY ASKED QUESTIONS                     │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ ▶ How do I track my reading progress?  [+] │ │
│ └─────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────┐ │
│ │ ▼ Can I save my favorite books?        [-] │ │
│ │                                             │ │
│ │ Yes! Use the Random Book Recommender to...  │ │
│ └─────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────┐ │
│ │ ▶ How does the book recommender work?  [+] │ │
│ └─────────────────────────────────────────────┘ │
│ (8 FAQ items total)                            │
├─────────────────────────────────────────────────┤
│ Footer                                          │
└─────────────────────────────────────────────────┘
```

### Key Features
- **Form Validation**:
  - Name: min 2 chars
  - Email: regex pattern
  - Type: required selection
  - Message: min 10 chars
  - Real-time error messages
- **FAQ Accordion**: 
  - Click to expand/collapse
  - Auto-close others
  - Smooth max-height transition
- **localStorage**: Save feedback submissions

---

## 🎨 Design Principles Applied

### 1. Consistency
- Same navigation across all pages
- Consistent button styles and colors
- Uniform spacing using scale system
- Repeated card component design

### 2. Visual Hierarchy
- Large headings for page titles
- Clear section separation
- Use of whitespace
- Color contrast for CTAs

### 3. Mobile-First Approach
- Start with mobile layout (320px)
- Progressive enhancement for larger screens
- Touch-friendly targets (min 44px)
- Simplified navigation on mobile

### 4. Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA
- Focus states on all interactive elements

### 5. Performance
- CSS animations instead of JavaScript where possible
- Lazy loading for images
- Minimal external dependencies
- Optimized asset sizes

---

## 🔄 User Flows

### Flow 1: Finding a Book
1. Land on Home Page
2. Click "Explore Books" or navigate to Book Explorer
3. Search or filter by genre
4. Click book card
5. View details in modal
6. (Optional) Go to recommender to add to reading list

### Flow 2: Tracking Reading
1. Navigate to Reading Tracker
2. Enter book details
3. View calculated progress
4. Save progress
5. Return later to update

### Flow 3: Getting Recommendation
1. Navigate to Recommender
2. Select preferences (genre, length)
3. Click "Get Recommendation"
4. Add to reading list
5. Browse reading list

### Flow 4: Providing Feedback
1. Navigate to Feedback
2. Fill form with validation
3. Submit
4. See confirmation
5. (Optional) Check FAQ

---

## 📱 Responsive Showcase

### Desktop (1200px+)
- Full navigation menu always visible
- Multi-column grids (3-4 columns)
- Side-by-side layouts
- Hover states prominent

### Tablet (768-1023px)
- Full navigation or simplified
- 2-column grids
- Some stacking of content
- Touch-optimized

### Mobile (<768px)
- Hamburger menu
- Single column layouts
- Stacked content
- Larger touch targets
- Simplified features

---

## ✅ Design Checklist

- [x] Consistent color palette across all pages
- [x] Typography hierarchy established
- [x] Spacing scale applied uniformly
- [x] Mobile-first wireframes created
- [x] Responsive breakpoints defined
- [x] Component reusability considered
- [x] Accessibility features planned
- [x] User flows documented
- [x] Interactive states defined (hover, active, focus)
- [x] Loading states considered
- [x] Error states planned
- [x] Success feedback included

---

**Document Version**: 1.0  
**Last Updated**: February 6, 2025  
**Created By**: Readify Development Team
