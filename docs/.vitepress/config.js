export default {
	title: 'VITEPRESS',
	description: 'Just playing around.',
	base: '',
	themeConfig: {
		repo: 'luoqixyz/vitepress',
		nav: [
			{ text: 'HOME', link: '' },
			{ text: 'ABOUT', link: 'about/index' }
		],
		sidebar: [
			{
				text: 'WebSite',
				items: [
					{ text: 'html', link: 'website/html'},
				]
			}
		]
	}
}
