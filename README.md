# Housekeeping

A Django-based web application where users can post, manage, and share recipes.

Will include features to allow meal-prepping, shopping list creation, and automatic nutritional analysis based on a recipe's ingredients.

This is a personal learning project focused on web development and data-related features.


## 1. Status - Early Development

Elements created so far:

* Basic Django structure
* Apps `recipes` and `users` with their respective basic HTML templates

## 2. Tech Stack

* Python
* Django
* PostgreSQL

## 3. Planned Features


### 3.1. Users

* Authentication (signup, login, logout)
* User profiles
* User permissions and access control
* Social interactions (likes, favorites, and comments)

### 3.2. Recipes

* Recipe creation form
* Recipe listing
* Recipe detail view


### 3.3. Nutritional Analysis

* Ingredient extraction from recipe text
* Nutritional table generation based on a recipe's ingredients

### 3.4. Deployment

Options under consideration:

* Render (app + PostgreSQL)
* Render + Supabase (PostgreSQL)


## 4. Next Steps

* Create the Models and Forms for the `recipes` and `users` apps
* Integrate the application with a PostgreSQL database
