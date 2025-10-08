'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, ShoppingCart, Check } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface MealOption {
  id: string
  name: string
  price: number
  description?: string
}

interface DrinkOption {
  id: string
  name: string
  price: number
  unit?: string
}

interface ActivityOption {
  id: string
  name: string
  price: number
  description?: string
}

interface ExtraOption {
  id: string
  name: string
  price: number
  description?: string
}

export default function MealOptions() {
  const [snackBasket, setSnackBasket] = useState(0)
  const [selectedMeal, setSelectedMeal] = useState<string>('')
  const [mealCount, setMealCount] = useState(0)
  const [selectedDrinks, setSelectedDrinks] = useState<{ [key: string]: number }>({})
  const [selectedActivities, setSelectedActivities] = useState<{ [key: string]: number }>({})
  const [selectedExtras, setSelectedExtras] = useState<{ [key: string]: boolean }>({})

  const mealOptions: MealOption[] = [
    { id: 'wrap', name: 'Chicken Wrap with Chips 🍟 plus soft drink 🧋', price: 150 },
    { id: 'quarter', name: 'Quarter Chicken with Chips and a Roll', price: 150 },
    { 
      id: 'tbone', 
      name: 'Meats (Halaal) - T-Bone Steak with Wors 🧆', 
      price: 150,
      description: 'Served with Pap / Chips and Tomato Chutney / Chakalaka'
    },
  ]

  const drinks: DrinkOption[] = [
    { id: 'mojito', name: 'Mojito (non Alcoholic) / Juice', price: 40, unit: 'glass' },
    { id: 'mojito-jug', name: 'Mojito / Juice', price: 70, unit: 'jug' },
    { id: 'cappuccino', name: 'Cappuccino with Truffle Biscuits', price: 40 },
    { id: 'cider', name: 'Ciders (Alcoholic)', price: 40 },
    { id: 'wine', name: 'Bottle of Wine (Alcoholic)', price: 150 },
    { id: 'ice', name: 'Bag of Ice', price: 40 },
  ]

  const activities: ActivityOption[] = [
    { 
      id: 'paint', 
      name: '🎨 Paint Session', 
      price: 280, 
      description: 'Includes Canvas and paints plus a glass of wine' 
    },
    { 
      id: 'tufting', 
      name: 'Tufting / Rug making', 
      price: 560, 
      description: 'Includes materials' 
    },
  ]

  const extras: ExtraOption[] = [
    { id: 'balloons', name: 'Birthday or any occasion Basic Balloons set up', price: 450 },
    { id: 'table', name: 'Table set up', price: 50, description: 'per person' },
    { id: 'braai', name: 'Small Braai stand for 2', price: 150, description: 'Including a made fire plus a bag of charcoal' },
  ]

  const calculateTotal = () => {
    let total = 0
    
    // Snack baskets
    total += snackBasket * 80
    
    // Meals
    if (selectedMeal && mealCount > 0) {
      total += mealCount * 150
    }
    
    // Drinks
    Object.entries(selectedDrinks).forEach(([id, count]) => {
      const drink = drinks.find(d => d.id === id)
      if (drink && count > 0) {
        total += drink.price * count
      }
    })
    
    // Activities
    Object.entries(selectedActivities).forEach(([id, count]) => {
      const activity = activities.find(a => a.id === id)
      if (activity && count > 0) {
        total += activity.price * count
      }
    })
    
    // Extras
    Object.entries(selectedExtras).forEach(([id, selected]) => {
      const extra = extras.find(e => e.id === id)
      if (extra && selected) {
        total += extra.price
      }
    })
    
    return total
  }

  const generateWhatsAppMessage = () => {
    let message = "Hi! I'd like to order the following:\n\n"
    
    if (snackBasket > 0) {
      message += `🍟 Snack Basket with chips for one with soft drink - ${snackBasket} x R80 = R${snackBasket * 80}\n\n`
    }
    
    if (selectedMeal && mealCount > 0) {
      const meal = mealOptions.find(m => m.id === selectedMeal)
      if (meal) {
        message += `🍽️ Meal Option (R150pp):\n${meal.name} - ${mealCount} person(s) = R${mealCount * 150}\n`
        if (meal.description) {
          message += `   ${meal.description}\n`
        }
        message += '\n'
      }
    }
    
    const selectedDrinksArray = Object.entries(selectedDrinks).filter(([_, count]) => count > 0)
    if (selectedDrinksArray.length > 0) {
      message += '🥤 Drinks:\n'
      selectedDrinksArray.forEach(([id, count]) => {
        const drink = drinks.find(d => d.id === id)
        if (drink) {
          message += `   ${drink.name}${drink.unit ? ` (${drink.unit})` : ''} - ${count} x R${drink.price} = R${drink.price * count}\n`
        }
      })
      message += '\n'
    }
    
    const selectedActivitiesArray = Object.entries(selectedActivities).filter(([_, count]) => count > 0)
    if (selectedActivitiesArray.length > 0) {
      message += '🎨 Activities:\n'
      selectedActivitiesArray.forEach(([id, count]) => {
        const activity = activities.find(a => a.id === id)
        if (activity) {
          message += `   ${activity.name} - ${count} person(s) x R${activity.price} = R${activity.price * count}\n`
          if (activity.description) {
            message += `   (${activity.description})\n`
          }
        }
      })
      message += '\n'
    }
    
    const selectedExtrasArray = Object.entries(selectedExtras).filter(([_, selected]) => selected)
    if (selectedExtrasArray.length > 0) {
      message += '🎉 Special Occasion Extras:\n'
      selectedExtrasArray.forEach(([id]) => {
        const extra = extras.find(e => e.id === id)
        if (extra) {
          message += `   ${extra.name} - R${extra.price}`
          if (extra.description) {
            message += ` (${extra.description})`
          }
          message += '\n'
        }
      })
      message += '\n'
    }
    
    message += `💰 Total: R${calculateTotal()}\n\n`
    message += 'Please confirm availability and booking details. Thank you!'
    
    return encodeURIComponent(message)
  }

  const hasSelection = () => {
    return snackBasket > 0 || 
           (selectedMeal && mealCount > 0) || 
           Object.values(selectedDrinks).some(count => count > 0) ||
           Object.values(selectedActivities).some(count => count > 0) ||
           Object.values(selectedExtras).some(selected => selected)
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/27617747378?text=${message}`, '_blank')
  }

  return (
    <div className="space-y-8">
      {/* Snack Basket */}
      <Card className="bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 border-2 border-spa-beige-200 dark:border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-2">
                🍟 Snack Basket
              </h3>
              <p className="font-poppins text-spa-beige-600 dark:text-spa-beige-400 mb-2">
                Snack basket with chips for one 🍱 with a soft drink 🥤
              </p>
              <p className="font-poppins font-bold text-spa-pink-600 dark:text-spa-pink-400">
                R80 per person
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label className="font-poppins text-spa-black dark:text-spa-white">Quantity:</Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSnackBasket(Math.max(0, snackBasket - 1))}
                className="h-8 w-8 p-0"
              >
                -
              </Button>
              <span className="font-poppins font-semibold text-lg w-8 text-center">{snackBasket}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSnackBasket(snackBasket + 1)}
                className="h-8 w-8 p-0"
              >
                +
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meal Options */}
      <Card className="bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 border-2 border-spa-pink-200 dark:border-slate-700">
        <CardContent className="p-6">
          <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-4">
            🍽️ Meal Options @ R150pp
          </h3>
          
          <RadioGroup value={selectedMeal} onValueChange={setSelectedMeal}>
            <div className="space-y-4">
              {mealOptions.map((meal) => (
                <div key={meal.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/10 transition-colors">
                  <RadioGroupItem value={meal.id} id={meal.id} />
                  <Label htmlFor={meal.id} className="flex-1 cursor-pointer">
                    <p className="font-poppins text-spa-black dark:text-spa-white font-medium">{meal.name}</p>
                    {meal.description && (
                      <p className="font-poppins text-sm text-spa-beige-600 dark:text-spa-beige-400 mt-1">
                        {meal.description}
                      </p>
                    )}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
          
          {selectedMeal && (
            <div className="mt-4 pt-4 border-t border-spa-pink-200 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <Label className="font-poppins text-spa-black dark:text-spa-white">Number of people:</Label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMealCount(Math.max(0, mealCount - 1))}
                    className="h-8 w-8 p-0"
                  >
                    -
                  </Button>
                  <span className="font-poppins font-semibold text-lg w-8 text-center">{mealCount}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMealCount(mealCount + 1)}
                    className="h-8 w-8 p-0"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Drinks */}
      <Card className="bg-gradient-to-b from-spa-white to-spa-gold-50 dark:from-slate-800 dark:to-slate-900 border-2 border-spa-gold-200 dark:border-slate-700">
        <CardContent className="p-6">
          <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-4">
            🥤 Drinks
          </h3>
          
          <div className="space-y-4">
            {drinks.map((drink) => (
              <div key={drink.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-spa-gold-50 dark:hover:bg-spa-gold-900/10 transition-colors">
                <div className="flex-1">
                  <p className="font-poppins text-spa-black dark:text-spa-white font-medium">
                    {drink.name} {drink.unit && <span className="text-sm text-spa-beige-600 dark:text-spa-beige-400">({drink.unit})</span>}
                  </p>
                  <p className="font-poppins text-sm text-spa-gold-600 dark:text-spa-gold-400 font-semibold">R{drink.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedDrinks({
                      ...selectedDrinks,
                      [drink.id]: Math.max(0, (selectedDrinks[drink.id] || 0) - 1)
                    })}
                    className="h-8 w-8 p-0"
                  >
                    -
                  </Button>
                  <span className="font-poppins font-semibold text-lg w-8 text-center">
                    {selectedDrinks[drink.id] || 0}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedDrinks({
                      ...selectedDrinks,
                      [drink.id]: (selectedDrinks[drink.id] || 0) + 1
                    })}
                    className="h-8 w-8 p-0"
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activities */}
      <Card className="bg-gradient-to-b from-spa-white to-spa-beige-50 dark:from-slate-800 dark:to-slate-900 border-2 border-spa-beige-200 dark:border-slate-700">
        <CardContent className="p-6">
          <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-2">
            🎨 Optional Activities
          </h3>
          <p className="font-poppins text-sm text-spa-beige-600 dark:text-spa-beige-400 mb-4">
            Add some creative fun to your spa experience
          </p>
          
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-spa-beige-50 dark:hover:bg-spa-beige-900/10 transition-colors">
                <div className="flex-1">
                  <p className="font-poppins text-spa-black dark:text-spa-white font-medium">{activity.name}</p>
                  {activity.description && (
                    <p className="font-poppins text-sm text-spa-beige-600 dark:text-spa-beige-400 mt-1">
                      {activity.description}
                    </p>
                  )}
                  <p className="font-poppins text-sm text-spa-pink-600 dark:text-spa-pink-400 font-semibold mt-1">
                    R{activity.price} per person
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedActivities({
                      ...selectedActivities,
                      [activity.id]: Math.max(0, (selectedActivities[activity.id] || 0) - 1)
                    })}
                    className="h-8 w-8 p-0"
                  >
                    -
                  </Button>
                  <span className="font-poppins font-semibold text-lg w-8 text-center">
                    {selectedActivities[activity.id] || 0}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedActivities({
                      ...selectedActivities,
                      [activity.id]: (selectedActivities[activity.id] || 0) + 1
                    })}
                    className="h-8 w-8 p-0"
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Special Occasion Extras */}
      <Card className="bg-gradient-to-b from-spa-white to-spa-pink-50 dark:from-slate-800 dark:to-slate-900 border-2 border-spa-pink-200 dark:border-slate-700">
        <CardContent className="p-6">
          <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white mb-2">
            🎉 Optional for Special Occasions
          </h3>
          <p className="font-poppins text-sm text-spa-beige-600 dark:text-spa-beige-400 mb-4">
            Make your celebration extra special
          </p>
          
          <div className="space-y-4">
            {extras.map((extra) => (
              <div key={extra.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/10 transition-colors">
                <Checkbox
                  id={extra.id}
                  checked={selectedExtras[extra.id] || false}
                  onCheckedChange={(checked) => 
                    setSelectedExtras({ ...selectedExtras, [extra.id]: checked as boolean })
                  }
                />
                <Label htmlFor={extra.id} className="flex-1 cursor-pointer">
                  <p className="font-poppins text-spa-black dark:text-spa-white font-medium">{extra.name}</p>
                  {extra.description && (
                    <p className="font-poppins text-sm text-spa-beige-600 dark:text-spa-beige-400 mt-1">
                      {extra.description}
                    </p>
                  )}
                  <p className="font-poppins text-sm text-spa-pink-600 dark:text-spa-pink-400 font-semibold mt-1">
                    R{extra.price}
                  </p>
                </Label>
              </div>
            ))}
            
            {/* Ice as additional extra */}
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-spa-pink-50 dark:hover:bg-spa-pink-900/10 transition-colors">
              <Checkbox
                id="ice-extra"
                checked={selectedExtras['ice-extra'] || false}
                onCheckedChange={(checked) => 
                  setSelectedExtras({ ...selectedExtras, 'ice-extra': checked as boolean })
                }
              />
              <Label htmlFor="ice-extra" className="flex-1 cursor-pointer">
                <p className="font-poppins text-spa-black dark:text-spa-white font-medium">Bag of Ice</p>
                <p className="font-poppins text-sm text-spa-pink-600 dark:text-spa-pink-400 font-semibold mt-1">
                  R40
                </p>
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Order Summary and WhatsApp Button */}
      <Card className="bg-gradient-to-r from-spa-pink-50 to-spa-gold-50 dark:from-slate-700 dark:to-slate-800 border-2 border-spa-pink-300 dark:border-spa-pink-600 sticky bottom-4 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-playfair font-bold text-2xl text-spa-black dark:text-spa-white">
                Order Summary
              </h3>
              <p className="font-poppins text-sm text-spa-beige-600 dark:text-spa-beige-400">
                {hasSelection() ? 'Review your selections' : 'Select items to get started'}
              </p>
            </div>
            <div className="text-right">
              <p className="font-poppins text-sm text-spa-beige-600 dark:text-spa-beige-400 mb-1">Total Amount</p>
              <p className="font-playfair font-bold text-3xl text-spa-pink-600 dark:text-spa-pink-400">
                R{calculateTotal()}
              </p>
            </div>
          </div>
          
          <Button
            onClick={handleWhatsAppOrder}
            disabled={!hasSelection()}
            className="w-full bg-gradient-to-r from-spa-pink-500 to-spa-gold-500 hover:from-spa-pink-600 hover:to-spa-gold-600 text-spa-white font-poppins font-semibold py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {hasSelection() ? 'Order via WhatsApp' : 'Select Items First'}
          </Button>
          
          {hasSelection() && (
            <p className="font-poppins text-xs text-center text-spa-beige-600 dark:text-spa-beige-400 mt-3">
              You'll be redirected to WhatsApp with your order details
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
