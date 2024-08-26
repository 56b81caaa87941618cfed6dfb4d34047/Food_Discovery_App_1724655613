/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1724655615", {
    template: `
    <footer id="footer-section" style="min-height: 190px" class="flex-1 bg-white dark:bg-gray-800" style=""><div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10" style=""><hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" style=""> <div id="footer-content" class="text-center"><div class="flex"><a id="footer-logo-link" href="#" data-mf-new="true" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white" style=""><img id="footer-logo" src="./images/logo.svg" alt="Landwind Logo" class="h-6 mr-3 sm:h-9">
                            FoodieFind's with the Foodsd</a></div></div> <div class="flex"><div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2023 FoodieFind. Discover, savor, and share delicious ep
                    </div></div></div></footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
