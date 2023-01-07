
        let ipadair_text, iphone_min_text, iphone_max_text, Ipadair, Iphone_min, Iphone_max, Ipadair_pic, Ipadair_button_spacegray, Ipadair_button_pink, Ipadair_button_starlight, Ipadair_button_blue, Ipadair_button_purple, Ipadair_color_p, Ipadair_storage_p, Ipadair_choose_button_storage_sixfour, Ipadair_choose_button_network_wifi, Ipadair_choose_button_storage_twofivesix, Ipadair_choose_button_network_mobile, Iphone_min_pic, Iphone_min_button_blue, Iphone_min_button_purple, Iphone_min_button_midnight, Iphone_min_button_starlight, Iphone_min_button_red, Iphone_min_color_p, Iphone_min_storage_p, Iphone_min_choose_button_storage_onetwoeight, Iphone_min_choose_button_storage_twofivesix, Iphone_min_choose_button_storage_fiveonetwo, Iphone_max_pic, Iphone_max_button_blue, Iphone_max_button_purple, Iphone_max_button_midnight, Iphone_max_button_starlight, Iphone_max_button_red, Iphone_max_color_p, Iphone_max_storage_p, Iphone_max_choose_button_storage_onetwoeight, Iphone_max_choose_button_storage_twofivesix, Iphone_max_choose_button_storage_fiveonetwo;

        ipadair_text = document.querySelector('.ipad-air-text');
        iphone_min_text = document.querySelector('.iphone-min-text');
        iphone_max_text = document.querySelector('.iphone-max-text');

        Ipadair = document.querySelector('.ipadair');
        Iphone_min = document.querySelector('.iphone-min');
        Iphone_max = document.querySelector('.iphone-max');

        // ipad-air
        Ipadair_pic = document.querySelector('.ipadair-pic > img');
        Ipadair_button_spacegray = document.querySelector('.ipadair-button-spacegray');
        Ipadair_button_pink = document.querySelector('.ipadair-button-pink');
        Ipadair_button_starlight = document.querySelector('.ipadair-button-starlight');
        Ipadair_button_blue = document.querySelector('.ipadair-button-blue');
        Ipadair_button_purple = document.querySelector('.ipadair-button-purple');

        Ipadair_color_p = document.querySelector('.ipadair-color-p');
        Ipadair_storage_p = document.querySelector('.ipadair-storage-p');
        // Ipadairnetworkp = document.querySelector('.ipadair-network-p');

        Ipadair_choose_button_storage_sixfour = document.querySelector('.ipadair-choose-button-storage-sixfour');
        Ipadair_choose_button_network_wifi = document.querySelector('.ipadair-choose-button-network-wifi');
        Ipadair_choose_button_storage_twofivesix = document.querySelector('.ipadair-choose-button-storage-twofivesix');
        Ipadair_choose_button_network_mobile = document.querySelector('.ipadair-choose-button-network-mobile');
        // Ipadairtotaltext = document.querySelector('.ipadair-total-text')

        // iphone-min
        Iphone_min_pic = document.querySelector('.iphone-min-pic > img');
        Iphone_min_button_blue = document.querySelector('.iphone-min-button-blue');
        Iphone_min_button_purple = document.querySelector('.iphone-min-button-purple');
        Iphone_min_button_midnight = document.querySelector('.iphone-min-button-midnight');
        Iphone_min_button_starlight = document.querySelector('.iphone-min-button-starlight');
        Iphone_min_button_red = document.querySelector('.iphone-min-button-red');

        Iphone_min_color_p = document.querySelector('.iphone-min-color-p');
        Iphone_min_storage_p = document.querySelector('.iphone-min-storage-p');

        Iphone_min_choose_button_storage_onetwoeight = document.querySelector('.iphone-min-choose-button-storage-onetwoeight');
        Iphone_min_choose_button_storage_twofivesix = document.querySelector('.iphone-min-choose-button-storage-twofivesix');
        Iphone_min_choose_button_storage_fiveonetwo = document.querySelector('.iphone-min-choose-button-storage-fiveonetwo');

        // iphone-max
        Iphone_max_pic = document.querySelector('.iphone-max-pic >img')
        Iphone_max_button_blue = document.querySelector('.iphone-max-button-blue')
        Iphone_max_button_purple = document.querySelector('.iphone-max-button-purple')
        Iphone_max_button_midnight = document.querySelector('.iphone-max-button-midnight')
        Iphone_max_button_starlight = document.querySelector('.iphone-max-button-starlight')
        Iphone_max_button_red = document.querySelector('.iphone-max-button-red')

        Iphone_max_color_p = document.querySelector('.iphone-max-color-p');
        Iphone_max_storage_p = document.querySelector('.iphone-max-storage-p');

        Iphone_max_choose_button_storage_onetwoeight = document.querySelector('.iphone-max-choose-button-storage-onetwoeight');
        Iphone_max_choose_button_storage_twofivesix = document.querySelector('.iphone-max-choose-button-storage-twofivesix');
        Iphone_max_choose_button_storage_fiveonetwo = document.querySelector('.iphone-max-choose-button-storage-fiveonetwo');

        // function 阿~~~~
        ipadair_text.addEventListener('click', function(){
            Ipadair.classList.add('class','ipadair-flex');
            Iphone_min.classList.remove('iphone-min-flex');
            Iphone_max.classList.remove('iphone-max-flex');
        });
        iphone_min_text.addEventListener('click',function(){
            Iphone_min.classList.add('class','iphone-min-flex');
            Ipadair.classList.remove('ipadair-flex');
            Iphone_max.classList.remove('iphone-max-flex');
        });

        iphone_max_text.addEventListener('click',function(){
            Iphone_max.classList.add('class','iphone-max-flex');
            Ipadair.classList.remove('ipadair-flex');
            Iphone_min.classList.remove('iphone-min-flex');
        });

        // ipad air
        Ipadair_button_spacegray.addEventListener('click',function(){
            // let IpadairSrcImg = 
            Ipadair_pic.getAttribute('src');
            // Ipadairpic.setAttribute('src','./ipad-air-space-gray.jfif');
            Ipadair_pic.src = './ipad-air-space-gray.jfif';
            // console.log(IpadairSrcImg);
            Ipadair_color_p.innerHTML = `顏色:${Ipadair_button_spacegray.innerHTML}`;
            // console.log(Ipadairbuttonspacegray.innerHTML)
        });
        Ipadair_button_pink.addEventListener('click',function(){
            // Ipadairpic.getAttribute('src');
            Ipadair_pic.src = './ipad-air-pink.jfif';
            Ipadair_color_p.innerHTML = `顏色:${Ipadair_button_pink.innerHTML}`;
        });
        Ipadair_button_starlight.addEventListener('click',function(){
            Ipadair_pic.src = './ipad-air-starlight.jfif';
            Ipadair_color_p.innerHTML = `顏色:${Ipadair_button_starlight.innerHTML}`;
        });
        Ipadair_button_blue.addEventListener('click',function(){
            Ipadair_pic.src = './ipad-air-blue.jfif';
            Ipadair_color_p.innerHTML = `顏色:${Ipadair_button_blue.innerHTML}`;
        });
        Ipadair_button_purple.addEventListener('click',function(){
            Ipadair_pic.src = './ipad-air-purple.jfif';
            Ipadair_color_p.innerHTML = `顏色:${Ipadair_button_purple.innerHTML}`;
        });

        Ipadair_choose_button_storage_sixfour.addEventListener('click',function(){
            Ipadair_storage_p.innerHTML = `容量及功能:${Ipadair_choose_button_storage_sixfour.innerHTML}<br> 價格: 19,900`
        });
        Ipadair_choose_button_network_wifi.addEventListener('click',function(){
            Ipadair_storage_p.innerHTML = `容量及功能:${Ipadair_choose_button_network_wifi.innerHTML}<br> 價格: 24,900`
        });
        Ipadair_choose_button_storage_twofivesix.addEventListener('click',function(){
            Ipadair_storage_p.innerHTML = `容量及功能:${Ipadair_choose_button_storage_twofivesix.innerHTML}<br> 價格: 24,900`
        });
        Ipadair_choose_button_network_mobile.addEventListener('click',function(){
            Ipadair_storage_p.innerHTML = `容量及功能:${Ipadair_choose_button_network_mobile.innerHTML}<br> 價格: 29,900`
        });
        

        // iphone 14 -- iphone min
        Iphone_min_button_blue.addEventListener('click',function(){
            Iphone_min_pic.getAttribute('src');
            Iphone_min_pic.src = './iphone-14-blue.jfif';
            Iphone_min_color_p.innerHTML = `顏色:${Iphone_min_button_blue.innerHTML}`
        });
        Iphone_min_button_purple.addEventListener('click',function(){
            Iphone_min_pic.src = './iphone-14-purple.jfif';
            Iphone_min_color_p.innerHTML = `顏色:${Iphone_min_button_purple.innerHTML}`
        });
        Iphone_min_button_midnight.addEventListener('click',function(){
            Iphone_min_pic.src = './iphone-14-midnight.jfif';
            Iphone_min_color_p.innerHTML = `顏色:${Iphone_min_button_midnight.innerHTML}`
        });
        Iphone_min_button_starlight.addEventListener('click',function(){
            Iphone_min_pic.src = './iphone-14-starlight.jfif';
            Iphone_min_color_p.innerHTML = `顏色:${Iphone_min_button_starlight.innerHTML}`
        });
        Iphone_min_button_red.addEventListener('click',function(){
            Iphone_min_pic.src = './iphone-14-red.jfif';
            Iphone_min_color_p.innerHTML = `顏色:${Iphone_min_button_red.innerHTML}`
        });

        Iphone_min_choose_button_storage_onetwoeight.addEventListener('click',function(){
            Iphone_min_storage_p.innerHTML = `容量:${Iphone_min_choose_button_storage_onetwoeight.innerHTML}<br> 價格: 27,900`
        });
        Iphone_min_choose_button_storage_twofivesix.addEventListener('click',function(){
            Iphone_min_storage_p.innerHTML = `容量:${Iphone_min_choose_button_storage_twofivesix.innerHTML}<br> 價格: 31,400`
        });
        Iphone_min_choose_button_storage_fiveonetwo.addEventListener('click',function(){
            Iphone_min_storage_p.innerHTML = `容量:${Iphone_min_choose_button_storage_fiveonetwo.innerHTML}<br> 價格: 38,400`
        });


        // iphone 14 Plus
        Iphone_max_button_blue.addEventListener('click',function(){
            Iphone_max_pic.getAttribute('src');
            Iphone_max_pic.src = './iphone-14-plus-blue.jfif';
            Iphone_max_color_p.innerHTML = `顏色:${Iphone_max_button_blue.innerHTML}`
        });
        Iphone_max_button_purple.addEventListener('click',function(){
            Iphone_max_pic.src = './iphone-14-plus-purple.jfif';
            Iphone_max_color_p.innerHTML = `顏色:${Iphone_max_button_purple.innerHTML}`
        });
        Iphone_max_button_midnight.addEventListener('click',function(){
            Iphone_max_pic.src = './iphone-14-plus-midnight.jfif';
            Iphone_max_color_p.innerHTML = `顏色:${Iphone_max_button_midnight.innerHTML}`
        });
        Iphone_max_button_starlight.addEventListener('click',function(){
            Iphone_max_pic.src = './iphone-14-plus-starlight.jfif';
            Iphone_max_color_p.innerHTML = `顏色:${Iphone_max_button_starlight.innerHTML}`
        });
        Iphone_max_button_red.addEventListener('click',function(){
            Iphone_max_pic.src = './iphone-14-plus-red.jfif';
            Iphone_max_color_p.innerHTML = `顏色:${Iphone_max_button_red.innerHTML}`
        });

        Iphone_max_choose_button_storage_onetwoeight.addEventListener('click',function(){
            Iphone_max_storage_p.innerHTML = `容量:${Iphone_max_choose_button_storage_onetwoeight.innerHTML}<br> 價格: 31,900`
        });
        Iphone_max_choose_button_storage_twofivesix.addEventListener('click',function(){
            Iphone_max_storage_p.innerHTML = `容量:${Iphone_max_choose_button_storage_twofivesix.innerHTML}<br> 價格: 35,400`
        });
        Iphone_max_choose_button_storage_fiveonetwo.addEventListener('click',function(){
            Iphone_max_storage_p.innerHTML = `容量:${Iphone_max_choose_button_storage_fiveonetwo.innerHTML}<br> 價格: 42,400`
        });
