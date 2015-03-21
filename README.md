grunt-image-size-export
============

This is a grunt wrapper for [`image-size-export`](https://github.com/Sebastian-Fitzner/image-size-export). 

Pass a folder of images to this module and get infos like: 
- width
- height
- name 
- path 
- breakpoint (when you provide this information in your filename)

Written with [ImageSize](https://www.npmjs.com/package/image-size).

## Installation

`npm install grunt-image-size-export`

## Usage

Read picture infos from a provided source, process its infos and output processed infos to a custom output file (default = JSON).

When your file structure looks like that: 
``` bash
├───tmp
│   └───pictures
│       ├───carousel
│       │   └───stage
│       │           pic-01--1025.jpg
│       │           pic-01--1025_2x.jpg
│       │           pic-01--320.jpg
│       │           pic-01--320_2x.jpg
│       │           pic-01--769.jpg
│       │
│       └───marginal
│           ├───contact
│           │       pic-01--480.jpg
│           │       pic-01--480_2x.jpg
│           │       pic-01--768.jpg
│           │       pic-01--768_2x.jpg
│           │       pic-01--769.jpg
│           │       pic-01--769_2x.jpg
│           │
│           └───images
│                   pic-01--480.jpg
│                   pic-01--480_2x.jpg
│                   pic-01--640.jpg
│                   pic-01--640_2x.jpg
│                   pic-01--768.jpg
│                   pic-01--768_2x.jpg
│                   pic-01--769.jpg
│                   pic-01--769_2x.jpg
``` 

You will get one of the following outputs:

**Simple:**

This output is the standard output and fully adaptable with a handlebars template. 

``` json
[
	{
		"breakpoint": "1025",
		"name": "pic-01--1025.jpg",
		"width": 1344,
		"height": 536,
		"path": "tmp/pictures/carousel/stage/pic-01--1025.jpg"
	},
	{
		"breakpoint": "1025_2x",
		"name": "pic-01--1025_2x.jpg",
		"width": 2051,
		"height": 817,
		"path": "tmp/pictures/carousel/stage/pic-01--1025_2x.jpg"
	},
	{
        "...": "..."
    }
]
```

**Folders:**

This output is categorized by folder names. Just use the option `categorizeBy` and define the value `folders`.

``` json
[
	{
		"carousel-stage": [
			{
				"breakpoint": "1025",
				"name": "pic-01--1025.jpg",
				"width": 1344,
				"height": 536,
				"folder": "carousel-stage",
				"path": "tmp/pictures/carousel/stage/pic-01--1025.jpg"
			},
			{
				"...": "..."
			}
		]
	},
	{
		"marginal-contact": [
			{
				"...": "..."
			}
		]
	},
	{
		"marginal-images": [
			{
				"...": "..."
			}
		]
	}
]
```

**Breakpoints:**

This output is categorized by breakpoints. Just use the option `categorizeBy` and define the value `breakpoints`.

``` json
[
	{
		"1025": [
			{
				"breakpoint": "1025",
				"name": "pic-01--1025.jpg",
				"width": 1344,
				"height": 536,
				"folder": "stage",
				"path": "tmp/pictures/carousel/stage/pic-01--1025.jpg"
			}
		]
	},
	{
		"1025_2x": [
			{
				"...": "..."
			}
		]
	},
	{
		"320": [
			{
				"...": "..."
			}
		]
	}
]
```

## Options

All options of [`image-size-export`](https://github.com/Sebastian-Fitzner/image-size-export) are available. 

## Usage

You can enable this plugin in the `Gruntfile.js` of your project like that:

`grunt.loadNpmTasks('grunt-image-size-export');`

### Example

To get all image infos, here are some setting examples:

``` js
imageSizeExport: {
	options: {
		path: 'tmp/pictures/**/*.jpg',
		breakpointDelimiter: '--'
	},
	simple: {
		options: {
			output: 'test/expected/simple.json'
		}
	},
	folders: {
		options: {
			output: 'test/expected/folders.json',
			categorizeBy: 'folders',
			folderDepth: 2
		}
	},
	breakpoints: {
		options: {
			output: 'test/expected/breakpoints.json',
			categorizeBy: 'breakpoints'
		}
	}
}
```

## License
Copyright (c) 2015 Sebastian Fitzner. Licensed under the MIT license.

## ToDos

- Add tests
