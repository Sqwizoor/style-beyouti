# Meal Options & Extras Feature

## Overview
A new interactive meal ordering system has been added to the spa website that allows users to select meal options, drinks, activities, and special occasion extras, then send their complete order via WhatsApp.

## What Was Added

### 1. New Component: `meal-options.tsx`
Location: `components/meal-options.tsx`

This is an interactive React component that includes:

#### **Snack Basket Section**
- Snack basket with chips for one 🍱 with a soft drink 🥤
- Price: R80 per person
- Quantity selector with +/- buttons

#### **Meal Options Section (R150 per person)**
- Radio button selection for one of three options:
  1. **Chicken Wrap** - Served with Chips 🍟 plus a soft drink 🧋
  2. **Quarter Chicken** - With Chips and a Roll
  3. **T-Bone Steak with Wors** 🧆 (Halaal) - Served with Pap/Chips and Tomato Chutney/Chakalaka
- Number of people selector

#### **Drinks Section**
- Individual quantity selectors for each drink:
  - Mojito (non Alcoholic) / Juice - R40 per glass
  - Mojito / Juice Jug - R70
  - Cappuccino with Truffle Biscuits - R40
  - Ciders (Alcoholic) - R40
  - Bottle of Wine - R150
  - Bag of Ice - R40

#### **Optional Activities Section**
- Paint Session 🎨 - R280 per person
  - Includes Canvas and paints plus a glass of wine
- Tufting / Rug making - R560 per person
  - Includes materials
- Quantity selector for number of participants

#### **Special Occasion Extras Section**
Checkbox selections for:
- Birthday or any occasion Basic Balloons set up - R450
- Table set up - R50 per person
- Small Braai stand for 2 - R150
  - Including a made fire plus a bag of charcoal
- Additional Bag of Ice - R40

#### **Order Summary Card**
- Real-time total calculation
- Sticky positioning at bottom of screen
- Large "Order via WhatsApp" button
- Disabled state when no items selected
- Shows total amount prominently

### 2. Page Integration
The meal options component was integrated into `app/page.tsx`:

- Added new section: "Order Your Meal & Extras"
- Positioned after the existing "Food, Drinks & Activities" section
- Beautiful gradient background matching the spa theme
- Centered layout with max-width container

## Key Features

### ✅ Interactive Selection
- Quantity pickers with +/- buttons
- Radio buttons for meal selection (choose one)
- Checkboxes for extras (choose multiple)
- Real-time total calculation

### ✅ WhatsApp Integration
When user clicks "Order via WhatsApp":
1. Generates a detailed message with all selections
2. Includes quantities and prices for each item
3. Calculates and displays total
4. Opens WhatsApp with pre-filled message
5. User can review and send to the spa's WhatsApp number (27617747378)

### ✅ User Experience
- Clean, intuitive interface
- Matches existing spa website design
- Responsive layout for all devices
- Disabled state prevents empty orders
- Clear pricing information
- Descriptive labels and icons

### ✅ Visual Design
- Gradient cards with theme colors (pink, gold, beige)
- Hover effects on interactive elements
- Icons for visual appeal (🍟, 🍽️, 🥤, 🎨, 🎉)
- Sticky order summary for easy checkout
- Shadow effects and rounded corners

## Sample WhatsApp Message Format

```
Hi! I'd like to order the following:

🍟 Snack Basket with chips for one with soft drink - 2 x R80 = R160

🍽️ Meal Option (R150pp):
Chicken Wrap with Chips 🍟 plus soft drink 🧋 - 2 person(s) = R300

🥤 Drinks:
   Mojito (non Alcoholic) / Juice (glass) - 2 x R40 = R80
   Cappuccino with Truffle Biscuits - 1 x R40 = R40

🎨 Activities:
   🎨 Paint Session - 2 person(s) x R280 = R560
   (Includes Canvas and paints plus a glass of wine)

🎉 Special Occasion Extras:
   Birthday or any occasion Basic Balloons set up - R450
   Bag of Ice - R40

💰 Total: R1630

Please confirm availability and booking details. Thank you!
```

## Technical Details

### Dependencies Used
- React hooks (useState) for state management
- Shadcn UI components:
  - Button
  - Card/CardContent
  - Checkbox
  - RadioGroup/RadioGroupItem
  - Label
- Lucide React icons (MessageCircle, ShoppingCart, Check)

### State Management
- `snackBasket` - Number of snack baskets
- `selectedMeal` - ID of selected meal option
- `mealCount` - Number of people for meal
- `selectedDrinks` - Object mapping drink IDs to quantities
- `selectedActivities` - Object mapping activity IDs to participant counts
- `selectedExtras` - Object mapping extra IDs to boolean selection

### Functions
- `calculateTotal()` - Computes total price of all selections
- `generateWhatsAppMessage()` - Creates formatted message for WhatsApp
- `hasSelection()` - Checks if any items are selected
- `handleWhatsAppOrder()` - Opens WhatsApp with order details

## Testing Checklist

- [ ] All quantity selectors work correctly
- [ ] Meal radio button selection works
- [ ] Checkboxes toggle properly
- [ ] Total calculation is accurate
- [ ] WhatsApp button is disabled when no selections
- [ ] WhatsApp message format is correct
- [ ] Message is properly URL encoded
- [ ] Layout is responsive on mobile, tablet, desktop
- [ ] Dark mode styling looks good
- [ ] All prices match the specification

## Future Enhancements (Optional)

1. Add image preview for each meal option
2. Include allergen information
3. Add "Clear All" button to reset selections
4. Save order history in local storage
5. Add quantity limits or group discounts
6. Include delivery time estimation
7. Add special instructions text field
8. Create printable order summary

## Support Information

For any issues or questions, users can contact:
- Phone: 061 774 7378
- WhatsApp: +27 61 774 7378

## Files Modified/Created

1. ✅ Created: `components/meal-options.tsx`
2. ✅ Modified: `app/page.tsx` (added import and new section)

All existing components (checkbox, radio-group, label) were already available in the project.
