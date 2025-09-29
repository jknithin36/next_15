# React 19 - server actions

# 01_Basic of next.js

# layout

# Sever components vs client

# by default -> server Component

# server:

# fetch data inside a server component

# access backend resources directly

# keep senisitie info in the server side

# not to be exposed on the client side

# not todo:

# we cant use react hooks

# add events is not possible

# routing

# folder name as file ( next js handles all routes based on name and we should follow their convention)

# file_name inside it should be page.tsx

# profile/page.tsx

# to use client side we should use "use client" at the top

# nested route

# inside profile if we can go to differnt routes for example profile/account

# profile/account/page.tsx

# profile/page.tsx

# dynamic Routes

# routes based on dymaic id -> userproile, product detail page

# i mean foe every thig differnt values right

# dyanmic page-> [slug] -> [id]

# to get deatils

# params property

# async function

# then fetch dynaic value here

# layout

# root layout -> everything in will be in childern i mean common layout

# we can also create diffenet layout for diffenrnt things

# layouts are used to create sharable layout for whole applications and particular folder

# for example navigation for global

# side bar for paricular UI

# topic - catch all routes // optinal cache all routes

# muiltiple segments -> mobile / apple / < 1000 -> Multiple Slugs

# catch all routes -> catch all segments

# [...slug]. -> catch all routes

# optional is just not mandatory

# but [[]] -> double square brackets

# topic - Clinet side hooks

# Link -> link Component

# useRouter = Navigation

# object just methods like back, forward, push,replace ... and more

# usePathNAme = Navigation

# gives route name ( pathName)

# if we want to exclude some thing in one UI we can usePathname and extract the path and reomve that.

# use Search Params

# to extract the params in the url

# used to serach some thing from url

# and use methods like get, getAll, has and more...

# Topic -> Not Found Page

# we can create on root level and and also in different levels with UI

# but mostyly one is enough

# topic - Loading.tsx

# same as any level

# if same one global

# for different loading across different UIS

# create diffent files on each route folder

# name should be loading.tsx

# automatically renders

# error handiling -

# error.tsx -> to handle unexpected errors and give fallback Uri

##################---------

# Route Groups

# () -> not inclded the router's url path

# (auth) -> login, create, forgot-passowrd and more

# meta Data

# very important for seo

# static and dynamic metaData

# data fetching in server and client componenets
