import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Heart, DollarSign, Utensils, Wine, ArrowLeft } from 'lucide-react';

const RecipePage = () => {
  const nutritionData = [
    { title: "Calories", amount: 250, unit: "kcal" },
    { title: "Fat", amount: 15, unit: "g" },
    { title: "Carbohydrates", amount: 30, unit: "g" },
    { title: "Protein", amount: 4, unit: "g" }
  ]

  const ingredients = [
    { name: "potatoes", amount: 3, unit: "cups" },
    { name: "mayonnaise", amount: 1, unit: "cup" }
  ]

  const instructions = [
    "Boil potatoes until tender.",
    "Mix with mayonnaise and seasoning."
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      
      <Card className="border-none shadow-none">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
          <img 
            src="https://img.spoonacular.com/recipes/642583-312x231.jpg" 
            alt="Potato Salad"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <div className="flex items-center gap-1">
              <Heart className="h-5 w-5 text-destructive" />
              <span className="text-sm font-medium">123</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Header Section */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <CardTitle className="text-3xl mb-2">Potato Salad</CardTitle>
              <CardDescription>A delicious summer potato salad.</CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Vegetarian</Badge>
              <Badge variant="destructive">Gluten Free</Badge>
              <Badge>American</Badge>
              <Badge variant="secondary">Side Dish</Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>30 mins</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>4 servings</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span>$1.45 per serving</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="h-4 w-4 text-primary" />
              <span>Health Score: 76</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="ingredients" className="w-full">
        <TabsList className="w-full justify-start bg-muted">
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="wine">Wine Pairing</TabsTrigger>
        </TabsList>

        <TabsContent value="ingredients">
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <span className="font-medium text-primary">{ingredient.amount} {ingredient.unit}</span>
                    <span>{ingredient.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructions">
          <Card>
            <CardContent className="pt-6">
              <ol className="space-y-4">
                {instructions.map((step, index) => (
                  <li key={index} className="flex gap-4 p-4 hover:bg-muted/50 rounded-lg transition-colors">
                    <span className="font-medium text-primary">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {nutritionData.map((item, index) => (
                  <div key={index} className="text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover:text-primary">
                    <div className="font-medium text-lg">{item.amount}{item.unit}</div>
                    <div className="text-sm text-muted-foreground">{item.title}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wine">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Wine className="h-5 w-5 text-primary" />
                  <span className="font-medium">Recommended Wines</span>
                </div>
                <p>Pair with a crisp chardonnay or refreshing riesling.</p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Suggested Wine:</h4>
                  <div className="bg-muted/50 p-4 rounded-lg hover:bg-muted transition-colors">
                    <h5 className="font-medium">Kendall-Jackson Vintner's Reserve Chardonnay</h5>
                    <p className="text-sm text-muted-foreground mt-1">A lovely wine with flavors of apple and butter.</p>
                    <p className="text-sm font-medium mt-2">$15.99</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecipePage;