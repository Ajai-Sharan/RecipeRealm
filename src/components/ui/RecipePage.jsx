import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Heart, DollarSign, Utensils, Wine, ArrowLeft } from 'lucide-react';
import { useRecoilValue } from 'recoil';
import { selectedItemState } from '@/context/atom';
const RecipePage = ({id}) => {
  const recipe = useRecoilValue(selectedItemState(id));

  // Helper function to format price
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  // Create diet badges
  const getDietBadges = () => {
    const badges = [];
    if (recipe.vegetarian) badges.push({ label: 'Vegetarian', variant: 'default' });
    if (recipe.vegan) badges.push({ label: 'Vegan', variant: 'default' });
    if (recipe.glutenFree) badges.push({ label: 'Gluten Free', variant: 'destructive' });
    if (recipe.dairyFree) badges.push({ label: 'Dairy Free', variant: 'default' });
    return badges;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      
      <Card className="border-none shadow-none">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <div className="flex items-center gap-1">
              <Heart className="h-5 w-5 text-destructive" />
              <span className="text-sm font-medium">{recipe.aggregateLikes}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Header Section */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <CardTitle className="text-3xl mb-2">{recipe.title}</CardTitle>
              <CardDescription>
                <div dangerouslySetInnerHTML={{ __html: recipe.summary.split('.')[0] + '.' }} />
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              {getDietBadges().map((badge, index) => (
                <Badge key={index} variant={badge.variant}>{badge.label}</Badge>
              ))}
              {recipe.dishTypes?.map((type, index) => (
                <Badge key={index} variant="secondary">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{recipe.readyInMinutes} mins</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>{recipe.servings} servings</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span>{formatPrice(recipe.pricePerServing / 100)} per serving</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="h-4 w-4 text-primary" />
              <span>Health Score: {recipe.healthScore}</span>
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
          <TabsTrigger value="source">Source</TabsTrigger>
        </TabsList>

        <TabsContent value="ingredients">
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <span className="font-medium text-primary">
                      {ingredient.measures.us.amount} {ingredient.measures.us.unitLong}
                    </span>
                    <span>{ingredient.nameClean || ingredient.name}</span>
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
                {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
                  <li key={index} className="flex gap-4 p-4 hover:bg-muted/50 rounded-lg transition-colors">
                    <span className="font-medium text-primary">{step.number}</span>
                    <span>{step.step}</span>
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
                <div className="text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover:text-primary">
                  <div className="font-medium text-lg">{recipe.weightWatcherSmartPoints}</div>
                  <div className="text-sm text-muted-foreground">SmartPoints</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover:text-primary">
                  <div className="font-medium text-lg">{recipe.healthScore}</div>
                  <div className="text-sm text-muted-foreground">Health Score</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover:text-primary">
                  <div className="font-medium text-lg">{recipe.spoonacularScore.toFixed(1)}</div>
                  <div className="text-sm text-muted-foreground">Overall Score</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors hover:text-primary">
                  <div className="font-medium text-lg">{formatPrice(recipe.pricePerServing / 100)}</div>
                  <div className="text-sm text-muted-foreground">Per Serving</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="source">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-medium">Source:</h4>
                  <p>{recipe.sourceName}</p>
                  <p className="text-sm text-muted-foreground">Credits: {recipe.creditsText}</p>
                  {recipe.sourceUrl && (
                    <a 
                      href={recipe.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2"
                    >
                      View Original Recipe
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </a>
                  )}
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