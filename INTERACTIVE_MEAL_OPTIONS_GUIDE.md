# Interactive Meal Options - Complete Guide

## Overview
The interactive meal options component allows customers to select their food, drinks, activities, and extras, then send their complete order via WhatsApp with automatic pricing calculation.

---

## 📋 COMPLETE MENU OPTIONS

### 🍟 **Snack Basket** - R80 per person
- Snack basket with chips 🍟 for one 🍱
- Includes a soft drink 🥤
- **Interactive**: Use +/- buttons to select quantity

---

### 🍽️ **Meal Options** - R150 per person

Customers can **choose ONE** of the following options:

#### Option 1: Chicken Wrap
- Chicken Wrap served with Chips 🍟
- Plus a soft drink 🧋

#### Option 2: Quarter Chicken
- Quarter Chicken with Chips and a Roll

#### Option 3: Meats (Halaal)
- T-Bone Steak with Wors 🧆
- Served with Pap / Chips
- And Tomato Chutney / Chakalaka

**Interactive**: Radio button selection (choose one) + quantity selector for number of people

---

### 🥤 **Drinks**

Customers can select multiple drinks with quantities:

#### Non-Alcoholic Drinks:
- **Mojito (non Alcoholic) / Juice** - R40 per glass
- **Mojito / Juice (Jug)** - R70 per jug
- **Cappuccino with Truffle Biscuits** - R40

#### Alcoholic Drinks:
- **Ciders** - R40
- **Bottle of Wine** - R150
- **Bag of Ice** - R40

**Interactive**: Individual +/- quantity selectors for each drink

---

### 🎨 **Optional Activities**

#### Paint Session
- **Price**: R280 per person
- **Includes**: Canvas and paints plus a glass of wine
- **Interactive**: Quantity selector for number of participants

#### Tufting / Rug Making
- **Price**: R560 per person
- **Includes**: All materials
- **Interactive**: Quantity selector for number of participants

---

### 🎉 **Optional for Special Occasions**

Customers can select multiple extras (checkboxes):

- **Birthday or any occasion Basic Balloons set up** - R450
- **Table set up** - R50 per person
- **Small Braai stand for 2** - R150
  - Including a made fire plus a bag of charcoal
- **Bag of Ice** - R40 (additional)

**Interactive**: Checkboxes to select multiple options

---

## 🎯 HOW IT WORKS

### Step 1: Customer Selects Items
- **Snack Baskets**: Click +/- to choose quantity
- **Meals**: Select one option via radio buttons, then choose number of people
- **Drinks**: Select quantities for each drink type
- **Activities**: Choose number of participants for each activity
- **Extras**: Check boxes for desired special occasion items

### Step 2: Real-Time Total Calculation
- Total updates automatically as selections are made
- Displayed prominently in the Order Summary card
- Shows breakdown: "R[AMOUNT]"

### Step 3: Order via WhatsApp
- Button is **disabled** until at least one item is selected
- When clicked, generates a formatted WhatsApp message
- Opens WhatsApp with pre-filled order details
- Sends to: +27 61 774 7378

---

## 📱 SAMPLE WHATSAPP MESSAGE

```
Hi! I'd like to order the following:

🍟 Snack Basket with chips for one with soft drink - 3 x R80 = R240

🍽️ Meal Option (R150pp):
Meats (Halaal) - T-Bone Steak with Wors 🧆 - 4 person(s) = R600
   Served with Pap / Chips and Tomato Chutney / Chakalaka

🥤 Drinks:
   Mojito (non Alcoholic) / Juice (glass) - 2 x R40 = R80
   Bottle of Wine (Alcoholic) - 1 x R150 = R150
   Bag of Ice - 2 x R40 = R80

🎨 Activities:
   🎨 Paint Session - 4 person(s) x R280 = R1120
   (Includes Canvas and paints plus a glass of wine)

🎉 Special Occasion Extras:
   Birthday or any occasion Basic Balloons set up - R450
   Table set up - R50 (per person)
   Small Braai stand for 2 - R150 (Including a made fire plus a bag of charcoal)
   Bag of Ice - R40

💰 Total: R2910

Please confirm availability and booking details. Thank you!
```

---

## ✨ KEY FEATURES

### User Experience
✅ **Visual Feedback**: Hover effects on all interactive elements
✅ **Clear Pricing**: All prices shown upfront
✅ **Disabled State**: Can't order without selections
✅ **Responsive Design**: Works on mobile, tablet, desktop
✅ **Dark Mode**: Full dark mode support
✅ **Sticky Summary**: Order summary stays visible while scrolling

### Interactive Controls
✅ **Quantity Pickers**: +/- buttons for easy selection
✅ **Radio Buttons**: Choose one meal option
✅ **Checkboxes**: Select multiple extras
✅ **Real-time Updates**: Total calculates instantly
✅ **Clear Labels**: Icons and descriptions for each item

### Smart Features
✅ **Automatic Calculation**: No math needed
✅ **Formatted Message**: Professional WhatsApp message
✅ **URL Encoding**: Handles special characters
✅ **Validation**: Ensures at least one item selected
✅ **Per Person Pricing**: Clear pricing structure

---

## 🎨 VISUAL DESIGN

### Color-Coded Cards
- **Snack Basket**: Beige gradient 🟤
- **Meal Options**: Pink gradient 🌸
- **Drinks**: Gold gradient 🟡
- **Activities**: Beige gradient 🟤
- **Special Occasions**: Pink gradient 🌸
- **Order Summary**: Pink-to-gold gradient with sticky positioning

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Poppins (clean sans-serif)
- **Prices**: Bold and colored (pink/gold)

### Icons & Emojis
- 🍟 Snacks
- 🍽️ Meals
- 🥤 Drinks
- 🎨 Activities
- 🎉 Special Occasions
- 💰 Total

---

## 🛠️ TECHNICAL DETAILS

### Component Location
`components/meal-options.tsx`

### State Management
```typescript
- snackBasket: number (quantity)
- selectedMeal: string (meal ID)
- mealCount: number (people count)
- selectedDrinks: { [key: string]: number } (drink quantities)
- selectedActivities: { [key: string]: number } (participant counts)
- selectedExtras: { [key: string]: boolean } (selected extras)
```

### Key Functions
- `calculateTotal()` - Computes total price
- `generateWhatsAppMessage()` - Creates formatted message
- `hasSelection()` - Checks if items selected
- `handleWhatsAppOrder()` - Opens WhatsApp

### Dependencies
- React (useState hook)
- Shadcn UI components (Button, Card, Checkbox, RadioGroup, Label)
- Lucide React icons (MessageCircle)

---

## 💡 CUSTOMER BENEFITS

1. **Easy Selection**: Visual interface, no confusion
2. **Price Transparency**: See costs before ordering
3. **Flexibility**: Mix and match options
4. **Quick Ordering**: One click to WhatsApp
5. **Professional**: Clean, organized order format
6. **Mobile-Friendly**: Order from any device
7. **No App Required**: Works with WhatsApp Web

---

## 📈 BUSINESS BENEFITS

1. **Reduced Errors**: Formatted orders reduce mistakes
2. **Clear Communication**: All details in one message
3. **Professional Image**: Polished ordering experience
4. **Upselling**: Shows all options at once
5. **Time Saving**: No back-and-forth clarifying orders
6. **Easy Tracking**: WhatsApp messages are recorded
7. **Customer Satisfaction**: Easy, enjoyable ordering process

---

## 🔧 CUSTOMIZATION OPTIONS

Want to add more items? Easy!

### Add New Meal Option:
```typescript
{ 
  id: 'new-meal', 
  name: 'New Meal Name', 
  price: 150,
  description: 'Optional description'
}
```

### Add New Drink:
```typescript
{ 
  id: 'new-drink', 
  name: 'New Drink', 
  price: 40, 
  unit: 'glass' // optional
}
```

### Add New Activity:
```typescript
{ 
  id: 'new-activity', 
  name: 'New Activity', 
  price: 280, 
  description: 'What includes'
}
```

### Add New Extra:
```typescript
{ 
  id: 'new-extra', 
  name: 'New Extra', 
  price: 50, 
  description: 'Optional note'
}
```

---

## ✅ TESTING CHECKLIST

- [ ] All quantities can be increased/decreased
- [ ] Meal radio buttons work correctly
- [ ] Activity quantities update properly
- [ ] Extra checkboxes toggle on/off
- [ ] Total calculates accurately
- [ ] WhatsApp button disabled when no selections
- [ ] WhatsApp message format is correct
- [ ] All prices match the menu
- [ ] Works on mobile devices
- [ ] Works in dark mode
- [ ] Icons display correctly
- [ ] Hover effects work

---

## 📞 SUPPORT

For any questions or custom modifications:
- **Phone**: 061 774 7378
- **WhatsApp**: +27 61 774 7378

---

**Status**: ✅ Fully Functional & Ready to Use!
