<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'type' => 'Fiction',
                'title' => 'Those Summer Nights',
                'description' => '<p>
                    Hannah used to be all about focus, back before she shattered her ankle and her
                    Olympic dreams in one bad soccer play. These days, she’s all about
                    distraction—anything to keep the painful memories of her recent past at bay,
                    including the string of bad decisions that landed her at boarding school for a
                    year.
                    </p>
                    <p>
                    Enter Bonanza, the local entertainment multiplex and site of Hannah’s summer
                    employment. With its mini golf course, bowling alley, and arcade—not to
                    mention her hot, flirty coworker Patrick—Bonanza seems like the perfect way to
                    stay distracted. Until her boss announces the annual Bonanza tournament, a
                    staff competition that brings her past Olympic nightmares crashing back into
                    her present.
                    </p>
                    <p>
                    On top of that, the Bonanza staff includes Brie, the ex-best friend she cut
                    off last year, and Ethan, her brother’s best friend who became unreasonably
                    attractive in her year away and who accepts her, even knowing her worst
                    secrets. Under the neon lights of Bonanza, Hannah must decide whether she can
                    find a way to discover a new self in the midst of her old life.
                    </p>',
                'image' => '1.webp',
                'isbn' => '9781534488403',
                'author' => 'Laura Silverman',
                'publisher' => 'Simon & Schuster',
                'stocks' => 30,
                'pages' => 400,
                'weight' => 403,
                'price' => 65.90
            ],
            [
                'type' => 'Fiction',
                'title' => 'Girl, Goddess, Queen',
                'description' => '<p>
                    The feminist myths of Madeline Miller meet the #spice of Sarah J. Maas (with a
                    hefty slice of Bridgerton\'s sexy, witty banter) in this fierce, fresh and
                    enormously fun YA fantasy retelling from a growing TikTok superstar
                    </p>
                    <p>To hell with love, this goddess has other plans...</p>
                    <p>
                    Thousands of years ago, the gods told a lie: how Persephone was a pawn in the
                    politics of other gods. How Hades kidnapped Persephone to be his bride. How
                    her mother, Demeter, was so distraught she caused the Earth to start dying.
                    </p>
                    <p>The real story is much more interesting.</p>
                    <p>
                    Persephone wasn\'t taken to hell: she jumped. There was no way she was going to
                    be married off to some smug god more in love with himself than her.
                    </p>
                    <p>
                    Now all she has to do is convince the Underworld\'s annoyingly sexy, arrogant
                    and frankly rude ruler, Hades, to fall in line with her plan. A plan that will
                    shake Mount Olympus to its very core.
                    </p>
                    <p>But consequences can be deadly, especially when you\'re already in hell...</p>',
                'image' => '2.webp',
                'isbn' => '9780241627907',
                'author' => 'Bea Fitzgerald',
                'publisher' => 'Penguin',
                'stocks' => 30,
                'pages' => 496,
                'weight' => 700,
                'price' => 82.00
            ],
            [
                'type' => 'Fiction',
                'title' => 'Portrait of a Thief',
                'description' => '<p>
                    History is told by the conquerors. Across the Western world, museums display
                    the spoils of war, of conquest, of colonialism: priceless pieces of art looted
                    from other countries, kept even now.
                    </p>
                    <p>Will Chen plans to steal them back.</p>
                    <p>
                    A senior at Harvard, Will fits comfortably in his carefully curated roles: a
                    perfect student, an art history major and sometimes artist, the eldest son who
                    has always been his parents\' American Dream. But when a mysterious Chinese
                    benefactor reaches out with an impossible—and illegal—job offer, Will finds
                    himself something else as well: the leader of a heist to steal back five
                    priceless Chinese sculptures, looted from Beijing centuries ago.
                    </p>
                    <p>
                    His crew is every heist archetype one can imagine—or at least, the closest he
                    can get. A con artist: Irene Chen, a public policy major at Duke who can talk
                    her way out of anything. A thief: Daniel Liang, a premed student with steady
                    hands just as capable of lockpicking as suturing. A getaway driver: Lily Wu,
                    an engineering major who races cars in her free time. A hacker: Alex Huang, an
                    MIT dropout turned Silicon Valley software engineer. Each member of his crew
                    has their own complicated relationship with China and the identity they\'ve
                    cultivated as Chinese Americans, but when Will asks, none of them can turn him
                    down.
                    </p>
                    <p>
                    Because if they succeed? They earn fifty million dollars—and a chance to make
                    history. But if they fail, it will mean not just the loss of everything
                    they\'ve dreamed for themselves but yet another thwarted attempt to take back
                    what colonialism has stolen.
                    </p>
                    <p>
                    Equal parts beautiful, thoughtful, and thrilling, Portrait of a Thief is a
                    cultural heist and an examination of Chinese American identity, as well as a
                    necessary critique of the lingering effects of colonialism.
                    </p>',
                'image' => '3.webp',
                'isbn' => '9780593186060',
                'author' => 'Grace D. Li',
                'publisher' => 'Tiny Reparations Books',
                'stocks' => 30,
                'pages' => 416,
                'weight' => 286,
                'price' => 56.95
            ],
            [
                'type' => 'Fiction',
                'title' => 'Tomorrow And Tomorrow And Tomorrow',
                'description' => '<p>This is not a romance, but it is about love.</p>
                    <p>Will Chen plans to steal them back.</p>
                    <p>
                    When Sam catches sight of Sadie at a crowded train station one winter morning
                    he is catapulted back to the brief time they spent playing together as
                    children. Their unique spark is instantly reignited.
                    </p>
                    <p>
                    What comes next is a story of friendship and rivalry, fame and creativity,
                    betrayal and tragedy, perfect worlds and imperfect ones. And, ultimately, our
                    need to connect: to be loved and to love.
                    </p>',
                'image' => '4.webp',
                'isbn' => '9781529115543',
                'author' => 'Gabrielle Zevin',
                'publisher' => 'Vintage',
                'stocks' => 30,
                'pages' => 496,
                'weight' => 341,
                'price' => 59.90
            ],
            [
                'type' => 'Fiction',
                'title' => 'Sparring Partners',
                'description' => '<p>
                    “Homecoming” takes us back to Ford County, the fictional setting of many of
                    John Grisham’s unforgettable stories. Jake Brigance is back, but he’s not in
                    the courtroom. He’s called upon to help an old friend, Mack Stafford, a former
                    lawyer in Clanton, who three years earlier became a local legend when he stole
                    money from his clients, divorced his wife, filed for bankruptcy, and left his
                    family in the middle of the night, never to be heard from again—until now. Now
                    Mack is back, and he’s leaning on his old pals, Jake and Harry Rex, to help
                    him return. His homecoming does not go as planned.
                    </p>
                    <p>
                    In “Strawberry Moon,” we meet Cody Wallace, a young death row inmate only
                    three hours away from execution. His lawyers can’t save him, the courts slam
                    the door, and the governor says no to a last-minute request for clemency. As
                    the clock winds down, Cody has one final request.
                    </p>
                    <p>
                    The “Sparring Partners” are the Malloy brothers, Kirk and Rusty, two
                    successful young lawyers who inherited a once prosperous firm when its
                    founder, their father, was sent to prison. Kirk and Rusty loathe each other,
                    and speak to each other only when necessary. As the firm disintegrates, the
                    resulting fiasco falls into the lap of Diantha Bradshaw, the only person the
                    partners trust. Can she save the Malloys, or does she take a stand for the
                    first time in her career and try to save herself?
                    </p>
                    <p>
                    By turns suspenseful, hilarious, powerful, and moving, these are three of the
                    greatest stories John Grisham has ever told.
                    </p>',
                'image' => '5.webp',
                'isbn' => '9780593470909',
                'author' => 'John Grisham',
                'publisher' => 'Vintage',
                'stocks' => 30,
                'pages' => 416,
                'weight' => 249,
                'price' => 46.95
            ],
            [
                'type' => 'Fiction',
                'title' => 'Mysteries Of Thorn Manor',
                'description' => '<p>
                    In this delightful sequel novella to the New York Times bestselling Sorcery of
                    Thorns, Elisabeth, Nathaniel, and Silas must unravel the magical trap keeping
                    them inside Thorn Manor in time for their Midwinter Ball!
                    </p>
                    <p>
                    Elisabeth Scrivener is finally settling into her new life with sorcerer
                    Nathaniel Thorn. Now that their demon companion Silas has returned, so has
                    scrutiny from nosy reporters hungry for gossip about the city’s most powerful
                    sorcerer and the librarian who stole his heart. But something strange is afoot
                    at Thorn Manor: the estate’s wards, which are meant to keep their home safe,
                    are acting up and forcibly trapping the Manor’’ occupants inside. Surely it
                    must be a coincidence that this happened just as Nathaniel and Elisabeth
                    started getting closer to one another...
                    </p>
                    <p>
                    With no access to the outside world, Elisabeth, Nathaniel, and Silas—along
                    with their new maid Mercy—will have to work together to discover the source of
                    the magic behind the malfunctioning wards before they’re due to host the
                    city’s Midwinter Ball. Not an easy task when the house is filled with
                    unexpected secrets, and all Elisabeth can think about is kissing Nathaniel in
                    peace. But when it becomes clear that the house, influenced by the magic of
                    Nathaniel’s ancestors, requires a price for its obedience, Elisabeth and
                    Nathaniel will have to lean on their connection like never before to set
                    things right.
                    </p>',
                'image' => '6.webp',
                'isbn' => '9781665938969',
                'author' => 'Margaret Rogerson',
                'publisher' => 'Simon & Schuster',
                'stocks' => 30,
                'pages' => 192,
                'weight' => 139,
                'price' => 40.90
            ],
            [
                'type' => 'Fiction',
                'title' => 'Maybe Not',
                'description' => '<p>
                    When Warren has the opportunity to live with a female roommate, he instantly
                    agrees. It could be an exciting change.
                    </p>
                    <p>Or maybe not.</p>
                    <p>
                    Especially when that roommate is the cold and seemingly calculating Bridgette.
                    Tensions run high and tempers flare as the two can hardly stand to be in the
                    same room together. But Warren has a theory about Bridgette: anyone who can
                    hate with that much passion should also have the capability to love with that
                    much passion. And he wants to be the one to test this theory.
                    </p>
                    <p>
                    Will Bridgette find it in herself to warm her heart to Warren and finally
                    learn to love?
                    </p>
                    <p>Maybe.</p>
                    <p>Maybe not.</p>',
                'image' => '7.webp',
                'isbn' => '9781398526235',
                'author' => 'Colleen Hoover',
                'publisher' => 'Simon & Schuster',
                'stocks' => 30,
                'pages' => 160,
                'weight' => 420,
                'price' => 59.90
            ],
            [
                'type' => 'Fiction',
                'title' => 'King of Pride',
                'description' => '<p>
                    She\'s his opposite in every way...and the greatest temptation he\'s ever known.
                    </p>
                    <p>
                    Reserved, controlled, and proper to a fault, Kai Young has neither the time
                    nor inclination for chaos - and Isabella, with her purple hair and
                    inappropriate jokes, is chaos personified.
                    </p>
                    <p>
                    With a crucial CEO vote looming and a media empire at stake, the billionaire
                    heir can\'t afford the distraction she brings.
                    </p>
                    <p>
                    Isabella is everything he shouldn\'t want, but with every look and every touch,
                    he\'s tempted to break all his rules...and claim her as his own.
                    </p>
                    <p>***</p>
                    <p>
                    Bold, impulsive, and full of life, Isabella Valencia has never met a party she
                    doesn\'t like or a man she couldn\'t charm...except for Kai Young.
                    </p>
                    <p>
                    It shouldn\'t matter. He\'s not her type - the man translates classics into
                    Latin for fun, and his membership at the exclusive club where she bartends
                    means he\'s strictly off limits.
                    </p>
                    <p>
                    But she can\'t deny that, beneath his cool exterior, is a man who could make
                    her melt with just a touch.
                    </p>
                    <p>
                    No matter how hard they try, they can\'t resist giving into their forbidden
                    desires.
                    </p>',
                'image' => '8.webp',
                'isbn' => '9780349436340',
                'author' => 'Ana Huang',
                'publisher' => 'PIATKUS',
                'stocks' => 30,
                'pages' => 464,
                'weight' => 270,
                'price' => 59.90
            ],
            [
                'type' => 'Fiction',
                'title' => 'Happy Place',
                'description' => '<p>
                    Harriet and Wyn are the perfect couple - they go together like bread and
                    butter, gin and tonic, Blake Lively and Ryan Reynolds. Every year for the past
                    decade, they have left behind their lives to drink far too much wine and soak
                    up the sea air with their favourite people in the world. Except this year,
                    they are lying through their teeth. Harriet and Wyn broke up six months ago.
                    And they still haven\'t told anyone.
                    </p>
                    <p>
                    This is the last time they\'ll all be together here. The cottage is for sale,
                    and since they can\'t bear to break their best friends\' hearts, they\'ll fake it
                    for one more week. But how can you pretend to be in love - and get away with
                    it - in front of the people who know you best?
                    </p>',
                'image' => '9.webp',
                'isbn' => '9780241997932',
                'author' => 'Emily Henry',
                'publisher' => 'Penguin Books Ltd',
                'stocks' => 30,
                'pages' => 400,
                'weight' => 531,
                'price' => 79.95
            ],
            [
                'type' => 'Fiction',
                'title' => 'Throwback',
                'description' => '<p>
                    Back to the Future meets To All the Boys in this thrilling new YA time-travel
                    romance by award-winning author Maurene Goo.
                    </p>
                    <p>
                    Samantha Kang has always butted heads with her mom, Priscilla, who is a
                    first-generation Korean American, a former high school cheerleader and expects
                    Sam to want the same all-American nightmare. Meanwhile, Sam is a girl of the
                    times who has no energy for clichéd high school aspirations. After a huge
                    fight, Sam is desperate to get away from Priscilla, but instead, finds herself
                    thrown back. Way back.
                    </p>
                    <p>
                    To her shock, Sam lands in the ’90s...alongside a 17-year-old Priscilla. Now,
                    Sam has to deal with outdated tech, regressive ’90s attitudes, and a
                    time-crossed romance with the right guy in the wrong era.
                    </p>
                    <p>
                    With the clock ticking, Sam must figure out how to fix things with Priscilla
                    or risk being trapped in an analog world forever. Sam’s blast to the past has
                    her questioning everything she thought she knew about her mom...and herself.
                    </p>',
                'image' => '10.webp',
                'isbn' => '9781444973532',
                'author' => 'Maurene Goo',
                'publisher' => 'Hachette Children\'s Group',
                'stocks' => 30,
                'pages' => 368,
                'weight' => 420,
                'price' => 46.90
            ],
            [
                'type' => 'Fiction',
                'title' => 'If Only They Knew',
                'description' => '<p>
                    The story of Saloma, a minority in Singapore and her struggle to succeed in
                    life and marriage, shaped by her upbringing and relationship with her race.
                    </p>
                    <p>
                    This novel asks the questions about the role of women in marriage, the burden
                    of cultural inheritance, the oppression inherent in being a minority and
                    ultimately, the costs of not being true to oneself. Set in the 2010s of
                    Singapore, the story begins with protagonist, Saloma Salem, an entrepreneur
                    who believes that her ethnicity has impeded her success in life. As a result,
                    she steadfastly rejects her race and culture.
                    </p>
                    <p>
                    This strains her relationship with her mother who still lives alone in their
                    small family flat. Determined to be independent, she leads a simple life
                    despite Saloma’s generous allowance. Their fractious relationship breaks down
                    when she forces her antiquated beliefs about a wife’s role on Saloma. The
                    story tells how far Saloma would go to deny her culture, the efforts she takes
                    to save her marriage and to maintain the image of a perfect life. But her
                    plans go awry, forcing her to confront her own demons.
                    </p>',
                'image' => '11.webp',
                'isbn' => '9789815058086',
                'author' => 'Othman Anita',
                'publisher' => 'Penguin Random House',
                'stocks' => 30,
                'pages' => 222,
                'weight' => 420,
                'price' => 74.95
            ],
            [
                'type' => 'Fiction',
                'title' => 'Hades',
                'description' => '<p>
                    In 2012, sixteen-year-old troublemaker Kei and his mother move into a decaying
                    low-cost flat from the slums at the edge of town, right next to Maryam, a
                    young mother, and her three-year-old son Ishak. Shunned by society, Kei and
                    Maryam develop an unspoken bond, which starts to fray as the ghosts of their
                    pasts circle in. Both wonder if they can free themselves of the men who made
                    them the abominations everyone considers them to be, and of the despair
                    creeping in around them.
                    </p>',
                'image' => '12.webp',
                'isbn' => '9789670076102',
                'author' => 'Aishah Zainal',
                'publisher' => 'Gerakbudaya Enterprise',
                'stocks' => 30,
                'pages' => 199,
                'weight' => 420,
                'price' => 35.00
            ],
        ];

        foreach ($books as $value) {
            Book::create($value);
        }
    }
}
