<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Faq;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = [
            [
                'question' => 'VVU ni nini na ni jinsi gani inasambaa?',
                'answer' => 'VVU (Virusi vya Ukosefu wa Kinga Mwilini) ni virusi vinavyoshambulia mfumo wa kinga wa mwili. Inasambaa kupitia mahusiano ya kingono yasiyolindwa, kushiriki sindano, kutoka kwa mama kwenda kwa mtoto wakati wa ujauzito, kujifungua au kunyonyesha.',
                'category' => 'general',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'question' => 'Ni jinsi gani naweza kujua hali yangu ya VVU?',
                'answer' => 'Unaweza kujua hali yako ya VVU kwa kupima katika vituo vya afya, vituo vya upimaji wa VVU, au kupitia vipimo vya nyumbani. Upimaji ni wa bure na ni wa siri. Tunapendekeza upimaji kila miezi 3-6 kwa watu walio katika hatari kubwa.',
                'category' => 'testing',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'question' => 'Kama nimepata matokeo chanya ya VVU, ni hatua gani za kuchukua?',
                'answer' => 'Anza matibabu ya ARV haraka iwezekanavyo, fuata maagizo ya daktari, pima viral load mara kwa mara, tumia kondomu, na pata msaada wa kisaikolojia. Matibabu ya ARV ni ya bure katika vituo vyote vya umma.',
                'category' => 'treatment',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'question' => 'Je, VVU inaweza kuponyeka?',
                'answer' => 'Kwa sasa hakuna tiba ya VVU, lakini matibabu ya ARV yanaweza kudhibiti virusi na kuwezesha maisha ya kawaida. Watu wenye VVU wanaoweza kupata matibabu sahihi wanaweza kuishi maisha marefu na yenye afya.',
                'category' => 'treatment',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'question' => 'Ni jinsi gani naweza kujikinga na VVU?',
                'answer' => 'Tumia kondomu kila wakati, epuka kushiriki vifaa vya kudunga, pima mara kwa mara, punguza idadi ya washirika wa kingono, na chukua PrEP ikiwa uko katika hatari kubwa. Pia, pata tohara kwa wanaume.',
                'category' => 'prevention',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'question' => 'PrEP ni nini na ni nani anayestahili?',
                'answer' => 'PrEP (Pre-Exposure Prophylaxis) ni dawa za kuzuia VVU zinazochukuliwa na watu wasio na VVU lakini walio katika hatari kubwa. Ni kwa ajili ya washirika wa watu wenye VVU, wanaume wanaofanya mapenzi na wanaume, na makahaba.',
                'category' => 'prevention',
                'sort_order' => 6,
                'is_active' => true,
            ],
            [
                'question' => 'Je, mama mwenye VVU anaweza kuzaa mtoto asiye na VVU?',
                'answer' => 'Ndio, kwa matibabu sahihi ya ARV wakati wa ujauzito na baada ya kujifungua, uwezekano wa kusambaza VVU kwa mtoto ni chini ya 2%. Pia, kunyonyesha kwa muda mfupi na kufuata maagizo ya daktari ni muhimu.',
                'category' => 'pregnancy',
                'sort_order' => 7,
                'is_active' => true,
            ],
            [
                'question' => 'Ni wapi naweza kupata huduma za VVU?',
                'answer' => 'Huduma za VVU zinapatikana katika hospitali za umma, vituo vya afya, vituo maalum vya VVU, na kupitia huduma za nyumbani. Piga simu 116 kwa msaada wa haraka au tembelea tovuti yetu kwa maelezo zaidi.',
                'category' => 'services',
                'sort_order' => 8,
                'is_active' => true,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
