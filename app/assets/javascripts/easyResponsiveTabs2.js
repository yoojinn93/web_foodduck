// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true
            }
            //Variables
            var options = $.extend(defaults, options);            
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                $respTabs.find('ul.small_menu_list li').addClass('small_menu_item');
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                $respTabs.find('.small_menu_container > div').addClass('small_menu_content');
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '102%', margin: '-2px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.small_menu_list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup
                var $tabItemh2;
                $respTabs.find('.small_menu_content').before("<h2 class='small_menu_accordion' role='tab'><span class='small_menu_arrow'></span></h2>");

                var itemCount = 0;
                $respTabs.find('.small_menu_accordion').each(function () {
                    $tabItemh2 = $(this);
                    var innertext = $respTabs.find('.small_menu_item:eq(' + itemCount + ')').text();
                    $respTabs.find('.small_menu_accordion:eq(' + itemCount + ')').append(innertext);
                    $tabItemh2.attr('aria-controls', 'smenu_item_' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.small_menu_item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'smenu_item_' + (count));
                    $tabItem.attr('role', 'tab');

                    //First active tab                   
                    $respTabs.find('.small_menu_item').first().addClass('small_menu_active');
                    $respTabs.find('.small_menu_accordion').first().addClass('small_menu_active');
                    $respTabs.find('.small_menu_content').first().addClass('small_menu_content_active').attr('style', 'display:block');

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.small_menu_content').each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'smenu_item_' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {
                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('small_menu_accordion') && $currentTab.hasClass('small_menu_active')) {
                            $respTabs.find('.small_menu_content_active').slideUp('', function () { $(this).addClass('resp-accordion-closed'); });
                            $currentTab.removeClass('small_menu_active');
                            return false;
                        }
                        if (!$currentTab.hasClass('small_menu_active') && $currentTab.hasClass('small_menu_accordion')) {
                            $respTabs.find('.small_menu_active').removeClass('small_menu_active');
                            $respTabs.find('.small_menu_content_active').slideUp().removeClass('small_menu_content_active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('small_menu_active');

                            $respTabs.find('.small_menu_content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('small_menu_content_active');
                        } else {
                            $respTabs.find('.small_menu_active').removeClass('small_menu_active');
                            $respTabs.find('.small_menu_content_active').removeAttr('style').removeClass('small_menu_content_active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('small_menu_active');
                            $respTabs.find('.small_menu_content[aria-labelledby = ' + $tabAria + ']').addClass('small_menu_content_active').attr('style', 'display:block');
                        }
                    });
                    //Window resize function                   
                    $(window).resize(function () {
                        $respTabs.find('.resp-accordion-closed').removeAttr('style');
                    });
                });
            });
        }
    });
})(jQuery);

