import { Recipe } from "../recipes/Recipes.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('hamburgesa', 'This is a simply test', 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg'),
        new Recipe('pizza', 'This is a simply test', 'https://cuponassets.cuponatic-latam.com/backendMx/uploads/imagenes_descuentos/51639/9c0dc9b0c2fd5ab23df2671dc145a16afd424029.XL2.jpg'),
        new Recipe('tacos', 'This is a simply test', 'https://www.philadelphia.com.mx/modx/assets/img/revision2016/images/recetas/recetas_2015/ph-780x530_0002_Tacos-de-rib-eye-.png')
    ];
    getRecipes() {
        return this.recipes.slice();
    }
}