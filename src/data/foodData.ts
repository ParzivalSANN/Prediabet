import { Colors } from '../constants/Colors';

export interface FoodItem {
    id: string;
    name: string;
    category: 'Vegetables' | 'Fruits' | 'Grains' | 'Proteins' | 'Dairy' | 'Fats';
    calories: number;
    carbs: string;
    gi: number; // Glycemic Index
    desc: string;
    image: string;
    badge: 'Low GI' | 'Complex Carb' | 'Antioxidant' | 'Healthy Fats' | 'High Protein' | 'Calcium Rich';
    badgeColor: string;
    details?: {
        benefits: string[];
        portion: string;
        tips: string;
    };
}

export const FOOD_DATA: FoodItem[] = [
    {
        id: '1', name: 'Spinach', category: 'Vegetables', calories: 23, carbs: '3.6g', gi: 15,
        desc: 'Leafy green powerhouse rich in iron and magnesium.',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80',
        badge: 'Low GI', badgeColor: Colors.accent.green,
        details: {
            benefits: ['Rich in Iron', 'Vitamin K for bone health', 'Magnesium for blood sugar control'],
            portion: '1 cup (raw)',
            tips: 'Add to omelets or smoothies for a nutrient boost without affecting taste.'
        }
    },
    {
        id: '2', name: 'Quinoa', category: 'Grains', calories: 120, carbs: '21g', gi: 53,
        desc: 'A complete protein and high-fiber grain alternative.',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
        badge: 'Complex Carb', badgeColor: Colors.primary,
        details: {
            benefits: ['Complete Protein', 'High Fiber', 'Gluten-Free'],
            portion: '1/2 cup (cooked)',
            tips: 'Use as a base for salads or a substitute for rice.'
        }
    },
    {
        id: '3', name: 'Blueberries', category: 'Fruits', calories: 57, carbs: '14g', gi: 53,
        desc: 'Packed with antioxidants and vitamins.',
        image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&q=80',
        badge: 'Antioxidant', badgeColor: Colors.accent.purple,
        details: {
            benefits: ['High Antioxidants', 'Improves Insulin Sensitivity', 'Heart Health'],
            portion: '1 cup',
            tips: 'Perfect for topping yogurt or oatmeal.'
        }
    },
    {
        id: '4', name: 'Avocado', category: 'Fats', calories: 160, carbs: '8.5g', gi: 15,
        desc: 'Creamy source of healthy monounsaturated fats.',
        image: 'https://images.unsplash.com/photo-1523049673856-42848c51a7d6?w=500&q=80',
        badge: 'Healthy Fats', badgeColor: Colors.accent.orange,
        details: {
            benefits: ['Heart Healthy Fats', 'High Fiber (7g)', 'Potassium rich'],
            portion: '1/2 medium avocado',
            tips: 'Spread on whole grain toast or add to salads for creaminess.'
        }
    },
    {
        id: '5', name: 'Salmon', category: 'Proteins', calories: 208, carbs: '0g', gi: 0,
        desc: 'Fatty fish rich in Omega-3 fatty acids.',
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=500&q=80',
        badge: 'Healthy Fats', badgeColor: Colors.accent.orange,
        details: {
            benefits: ['High Omega-3s', 'Great Protein Source', 'Heart & Brain Health'],
            portion: '3 oz (cooked)',
            tips: 'Bake with lemon and dill for a simple, healthy dinner.'
        }
    },
    {
        id: '6', name: 'Greek Yogurt', category: 'Dairy', calories: 59, carbs: '3.6g', gi: 11,
        desc: 'Probiotic-rich and high in protein.',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
        badge: 'Calcium Rich', badgeColor: Colors.primary,
        details: {
            benefits: ['Probiotics for Gut Health', 'High Protein', 'Calcium'],
            portion: '1 cup (plain, non-fat)',
            tips: 'Avoid flavored versions; add your own fruit to control sugar.'
        }
    },
    {
        id: '7', name: 'Almonds', category: 'Fats', calories: 164, carbs: '6g', gi: 0,
        desc: 'Crunchy snack with healthy fats and fiber.',
        image: 'https://images.unsplash.com/photo-1508061253366-f7da98b096d1?w=500&q=80',
        badge: 'Healthy Fats', badgeColor: Colors.accent.orange,
        details: {
            benefits: ['Magnesium', 'Vitamin E', 'Satiety'],
            portion: '1 oz (approx 23 nuts)',
            tips: 'Keep a small portion in your bag for emergency hunger.'
        }
    },
    {
        id: '8', name: 'Broccoli', category: 'Vegetables', calories: 55, carbs: '11g', gi: 15,
        desc: 'Cruciferous vegetable known for cancer-fighting properties.',
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&q=80',
        badge: 'Low GI', badgeColor: Colors.accent.green,
        details: {
            benefits: ['Vitamin C & K', 'Fiber', 'Sulforaphane'],
            portion: '1 cup (chopped)',
            tips: 'Steam lightly to retain the most nutrients.'
        }
    },
    {
        id: '9', name: 'Sweet Potato', category: 'Vegetables', calories: 86, carbs: '20g', gi: 44,
        desc: 'Lower GI alternative to white potatoes, rich in Vitamin A.',
        image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a7c19?w=500&q=80',
        badge: 'Complex Carb', badgeColor: Colors.primary,
        details: {
            benefits: ['Vitamin A (Beta Carotene)', 'Fiber', 'Potassium'],
            portion: '1 medium (boiled)',
            tips: 'Boiling lowers the GI compared to roasting.'
        }
    },
    {
        id: '10', name: 'Lentils', category: 'Proteins', calories: 116, carbs: '20g', gi: 32,
        desc: 'Plant-based protein staple excellent for blood sugar.',
        image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?w=500&q=80',
        badge: 'High Protein', badgeColor: Colors.accent.teal,
        details: {
            benefits: ['High Fiber', 'Plant Protein', 'Iron'],
            portion: '1/2 cup (cooked)',
            tips: 'Great in soups or cold salads.'
        }
    },
    {
        id: '11', name: 'Chia Seeds', category: 'Fats', calories: 137, carbs: '12g', gi: 1,
        desc: 'Tiny seeds packed with fiber and Omega-3s.',
        image: 'https://images.unsplash.com/photo-1629196525974-f2a99d556942?w=500&q=80',
        badge: 'Healthy Fats', badgeColor: Colors.accent.orange,
        details: {
            benefits: ['Massive Fiber Content', 'Omega-3s', 'Hydration'],
            portion: '1 oz (2 tbsp)',
            tips: 'Make chia pudding or sprinkle on oatmeal.'
        }
    },
    {
        id: '12', name: 'Oats', category: 'Grains', calories: 68, carbs: '12g', gi: 55,
        desc: 'Contains beta-glucan which helps lower cholesterol.',
        image: 'https://images.unsplash.com/photo-1595180637311-6df798f090d8?w=500&q=80',
        badge: 'Complex Carb', badgeColor: Colors.primary,
        details: {
            benefits: ['Beta-glucan Fiber', 'Heart Health', 'Sustained Energy'],
            portion: '1/2 cup (cooked)',
            tips: 'Choose steel-cut or rolled oats over instant varieties.'
        }
    },
    {
        id: '13', name: 'Eggs', category: 'Proteins', calories: 78, carbs: '0.6g', gi: 0,
        desc: 'Standard for high-quality protein.',
        image: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=500&q=80',
        badge: 'High Protein', badgeColor: Colors.accent.teal,
        details: {
            benefits: ['Complete Protein', 'Choline', 'Lutein'],
            portion: '1 large egg',
            tips: 'Boiled eggs make for a perfect portable snack.'
        }
    },
    {
        id: '14', name: 'Strawberries', category: 'Fruits', calories: 32, carbs: '7.7g', gi: 41,
        desc: 'Low sugar fruit with high Vitamin C.',
        image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&q=80',
        badge: 'Antioxidant', badgeColor: Colors.accent.purple,
        details: {
            benefits: ['Vitamin C', 'Manganese', 'Anti-inflammatory'],
            portion: '1 cup (whole)',
            tips: 'Sweet enough to curb dessert cravings naturally.'
        }
    },
    {
        id: '15', name: 'Cottage Cheese', category: 'Dairy', calories: 98, carbs: '3.4g', gi: 10,
        desc: 'High casein protein content keeps you full longer.',
        image: 'https://images.unsplash.com/photo-1594911769666-88059c25330e?w=500&q=80',
        badge: 'High Protein', badgeColor: Colors.accent.teal,
        details: {
            benefits: ['Slow-digesting Protein', 'Calcium', 'Satiety'],
            portion: '1/2 cup',
            tips: 'Pair with fruit or use in savory dishes.'
        }
    },
];
