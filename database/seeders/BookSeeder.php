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
            [
                'type' => 'Non-Fiction',
                'title' => 'Poverty, Riches and Wealth: Moving from a Life of Lack into True Kingdom Abundance',
                'description' => '<p>Overcome the Never-Enough Mentality to Walk in True Abundance.</p>
                    <p>
                    Prosperity. It\'s one of the most dividing words in the Church. Some pastors
                    use it to tell their congregations that God will make them all rich, rich,
                    rich! Others spurn the word and insist that true Christlikeness is found in
                    forsaking all worldly riches and possessions. The truth is, neither of these
                    extremes is fully right or fully wrong.
                    </p>
                    <p>
                    In his latest book, Kris Vallotton mines the Scriptures in an eye-opening
                    study of what the Bible really says about money, poverty, riches and wealth.
                    </p>
                    <p>
                    Kingdom prosperity begins from the inside out. When you learn to cultivate a
                    mindset of abundance, no matter your circumstances, you will begin to
                    experience the wealth of heaven in every area of your life.
                    </p>',
                'image' => '13.webp',
                'isbn' => '9780800799076',
                'author' => 'Kris Vallotton',
                'publisher' => 'Kris Vallotton',
                'stocks' => 30,
                'pages' => 208,
                'weight' => 255,
                'price' => 59.90
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'Getting China Wrong',
                'description' => '<p>
                    The West\'s strategy of engagement with China has failed. More than three
                    decades of trade and investment with the advanced democracies have left that
                    country far richer and stronger than it would otherwise have been. But growth
                    and development have not caused China\'s rulers to relax their grip on
                    political power, abandon their mercantilist economic policies, or accept the
                    rules and norms of the existing international system. To the contrary: China
                    today is more repressive at home, more aggressive abroad, and more obviously
                    intent on establishing itself as the world’s preponderant power than at any
                    time since the death of Chairman Mao. What went wrong?
                    </p>
                    <p>
                    Put simply, the democracies underestimated the resilience, resourcefulness,
                    and ruthlessness of the Chinese Communist Party. For far too long, the United
                    States and its allies failed to take seriously the Party\'s unwavering
                    determination to crush opposition, build national power, and fulfill its
                    ideological and geopolitical ambitions. In this timely and powerfully argued
                    study, Aaron Friedberg identifies the assumptions underpinning engagement,
                    describes the counterstrategy that China\'s Communist Party rulers devised in
                    order to exploit the West\'s openness while defeating its plans, and explains
                    what the democracies must do now if they wish to preserve their prosperity,
                    protect their security, and defend their common values.
                    </p>',
                'image' => '14.webp',
                'isbn' => '9781509560325',
                'author' => 'Aaron L. Friedberg',
                'publisher' => 'Polity',
                'stocks' => 30,
                'pages' => 256,
                'weight' => 408,
                'price' => 112.28
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'Self-Publishing For Dummies, 2nd Edition',
                'description' => '<p>Get your books into the hands of readers with this simple how-to guide.</p>
                    <p>
                    Self-Publishing For Dummies takes you through the entire process of publishing
                    your own books, starting with the writing and editing process and moving
                    through cover design, printing options, distribution channels, and marketing
                    to a target audience. With the advice in this book, you can tackle
                    self-publishing, no matter what genre you write in. You’ll learn how to retain
                    full control over your work and keep the profits from the sales of your book.
                    In this updated edition, you’ll discover the latest technologies in
                    self-publishing, trends in the world of ebooks, and new marketing techniques
                    you can use online and in the real world. Becoming a published author is
                    easier than ever, thanks to this Dummies guide.
                    </p>',
                'image' => '15.webp',
                'isbn' => '9781394201273',
                'author' => 'Jason R. Rich',
                'publisher' => 'For Dummies',
                'stocks' => 30,
                'pages' => 400,
                'weight' => 544,
                'price' => 94.28
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'Quarterlife: The Search for Self in Early Adulthood',
                'description' => '<p>
                    An innovative psychotherapist tackles the overlooked stage of Quarterlife—the
                    years between adolescence and midlife—and provides a “fascinating” guide “on
                    how to navigate and thrive—rather than just survive—these odd years”
                    (PureWow).
                    </p>
                    <p>
                    “Quarterlife is an insightful, revealing look at the messy and uncharted paths
                    to wholeness, and a powerful tool for anyone navigating early
                    adulthood.”—Tembi Locke, New York Times bestselling author of From Scratch
                    </p>
                    <p>
                    I’m stuck. What’s wrong with me? Is this all there is? Satya Doyle Byock hears
                    these refrains regularly in her psychotherapy practice where she works with
                    “Quarterlifers,” individuals between the ages of (roughly) sixteen to
                    thirty-six. She understands their frustration. Some clients have done
                    everything “right”: graduate, get a job, meet a partner. Yet they are
                    unfulfilled and unclear on what to do next. Byock calls these Quarterlifers
                    “Stability Types.” Others are uninterested in this prescribed path, but feel
                    unmoored. She refers to them as “Meaning Types.”
                    </p>
                    <p>
                    While society is quick to label the emotions and behavior of this age group as
                    generational traits, Byock sees things differently. She believes these
                    struggles are part of the developmental journey of Quarterlife, a distinct
                    stage that every person goes through and which has been virtually ignored by
                    popular culture and psychology.
                    </p>
                    <p>
                    In Quarterlife, Byock utilizes personal storytelling, mythology, Jungian
                    psychology, pop culture, literature, and client case studies to provide
                    guideposts for this period of life. Readers will be able to find themselves on
                    the spectrum between Stability and Meaning Types, and engage with Byock’s four
                    pillars of Quarterlife development.
                    </p>
                    <p>
                    Quarterlife is a defining work that offers a compassionate roadmap toward
                    finding understanding, happiness, and wholeness in adulthood.
                    </p>',
                'image' => '16.webp',
                'isbn' => '9780525511687',
                'author' => 'Satya Doyle Byock',
                'publisher' => 'Random House Trade Paperbacks',
                'stocks' => 30,
                'pages' => 256,
                'weight' => 204,
                'price' => 84.95
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'Unlock Your Wealth Potential: Harness the Power of Chinese Astrology & Global Trends for Success (2024 - 2028)',
                'description' => '<p>
                    Read This Book To Prepare For The Great Transition & Opportunities Awaiting
                    You!
                    </p>
                    <p>
                    Predicting the future trajectory of global events and economic trends has
                    always been a challenge for many economists. This is because of the changing
                    dynamics in the geopolitical sphere, governmental policies, and shifting
                    societal beliefs and ideologies, all of which affect investment and
                    consumption of goods and services, the main drivers of the global economy. The
                    most difficult task of all is to build a common consensus, and disparities
                    often occur even among the most diligent of economists. Chinese astrology has
                    been taught and used in predicting economic events based on the understanding
                    of the 5 energy elements that control our planet’s geophysics, thereby
                    affecting certain sectors of the economy due to the presence of favourable and
                    unfavourable energies that rule a particular day, month, or year.
                    </p>
                    <p>
                    Through this book, the authors hope to provide us with a glimpse of the future
                    over the next 5 years based on their collective knowledge of Chinese astrology
                    and understanding of prevalent geopolitical, economic, and financial trends
                    that would exert themselves in the coming years. Tremendous amount of research
                    have been done by the authors to help us understand today’s technology trends
                    and how they will play significant roles in altering the way we live our lives
                    in the future. They also discuss potential pivotal events that could reshape
                    the geopolitical landscape in the coming years and have wide ramifications for
                    future generations.
                    </p>',
                'image' => '17.webp',
                'isbn' => '9789670015354',
                'author' => 'Evelyn Tan, PC Wong',
                'publisher' => 'Acepremier.com',
                'stocks' => 30,
                'pages' => 192,
                'weight' => 200,
                'price' => 59.90
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'Quality Investing: Owning The Best Companies For The Long Term',
                'description' => '<p>
                    Quality. We all make judgments about it every day. Yet articulating a clear
                    definition of quality in an investing context is challenging. This book
                    addresses the challenge, and distills years of practical investing experience
                    into a definitive account of this under-explored investment philosophy.
                    </p>
                    <p>
                    Finance theory has it that abnormal outcomes do not persist, that exceptional
                    performance will soon enough become average performance. Quality investing
                    involves seeking companies with the right attributes to overcome these forces
                    of mean reversion and, crucially, owning these outstanding companies for the
                    long term. This book pinpoints and explains the characteristics that increase
                    the probability of a company prospering over time - as well as those that
                    hinder such chances. Throughout, a series of fascinating real-life case
                    studies illustrate the traits that signify quality, as well as some that
                    flatter to deceive.
                    </p>
                    <p>
                    The authors\' firm, AKO Capital, has a strong track record of finding and
                    investing in quality companies - helping it deliver a compound annual growth
                    rate more than double that of the market since inception. Quality Investing
                    sheds light on the investment philosophy, processes and tough lessons that
                    have contributed to this consistent outperformance.
                    </p>',
                'image' => '18.webp',
                'isbn' => '9780857195128',
                'author' => 'Lawrence Cunningham',
                'publisher' => 'Harriman House',
                'stocks' => 30,
                'pages' => 350,
                'weight' => 521,
                'price' => 209.90
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'Money: Know More, Make More, Give More',
                'description' => '<p>
                    Do you want to get to the stage - soon - where you are truly financially
                    independent, able to use your money in the way you\'d like, and be completely
                    confident in your ability to take care of yourself and your family?
                    </p>
                    <p>
                    That is a universal desire, but many of us regard wealth and financial
                    independence as a goal which we\'ll likely never achieve - there are just too
                    many bills that need paying and there is a widespread belief that the money
                    game is rigged. Even people who win the lottery or inherit money often seem to
                    wind up losing it. The evidence suggests you can\'t win a game that you don\'t
                    understand - even if you start out winning - because you never understood the
                    game in the first place.
                    </p>
                    <p>
                    So how can you win with money? How can you create independent wealth and hold
                    on to it? This inspiring book by self-made multi-millionaire Rob Moore
                    explains the rules of the game, shares simple tricks for managing money
                    better, details how to create a plan for an ambitious future, and shows you
                    the very best way to become a millionaire - to think and behave like one!
                    </p>',
                'image' => '19.webp',
                'isbn' => '9781529337655',
                'author' => 'Rob Moore',
                'publisher' => 'John Murray',
                'stocks' => 30,
                'pages' => 405,
                'weight' => 305,
                'price' => 49.90
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'Invested',
                'description' => '<p>
                    “To say Charles Schwab is an entrepreneur is actually an understatement. He
                    really is a revolutionary.”—Phil Knight, co-founder of Nike, author of Shoe
                    Dog
                    </p>
                    <p>
                    The founder of The Charles Schwab Corporation recounts his ups and downs as he
                    made stock investing, once the expensive and clubby reserve of the few,
                    accessible to ordinary Americans.
                    </p>
                    <p>
                    In this deeply personal memoir, Schwab describes his passion to have Main
                    Street participate in the growing economy as investors and owners, not only
                    earners. Schwab opens up about his dyslexia and how he worked around and
                    ultimately embraced it, and about the challenges he faced while starting his
                    fledgling company in the 1970s. A year into his grand experiment in discounted
                    stock trading, living in a small apartment in Sausalito with his wife, Helen,
                    and new baby, he carried a six-figure debt and a pocketful of personal loans.
                    As it turned out, customers flocked to Schwab, leaving his small team
                    scrambling with scarce resources and no road map to manage the company’s
                    growth.
                    </p>
                    <p>
                    He recounts the company’s game-changing sale to Bank of America—and how, in
                    the end, the merger almost doomed his organization. We learn about the clever
                    and timely leveraged buyout he crafted to regain independence; the crushing
                    stock market collapse of 1987, just weeks after the company had gone public;
                    the dot-com meltdown of 2000 and its reverberating aftermath of economic
                    stagnation, layoffs, and the company’s eventual reinvention; and how the
                    company’s focus on managing risk protected it and its clients during the
                    financial crisis in 2008, propelling its growth.
                    </p>
                    <p>
                    A remarkable story of a company succeeding by challenging norms and
                    conventions through decades of change, Invested also offers unique insights
                    and lifelong principles for readers—the values that Schwab has lived and
                    worked by that have made him one of the most successful entrepreneurs of our
                    time. Today, his eponymous company is one of the leading financial services
                    firms in the world.
                    </p>',
                'image' => '20.webp',
                'isbn' => '9781984822543',
                'author' => 'Charles Schwab',
                'publisher' => 'Random House',
                'stocks' => 30,
                'pages' => 352,
                'weight' => 612,
                'price' => 152.90
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'The Crypto Handbook: The ultimate guide to understanding and investing in DIGITAL ASSETS, WEB3, the METAVERSE and more',
                'description' => '<p>
                    Turbulence in crypto markets has left investors and potential investors
                    terrified about the future of digital assets and decentralised finance.
                    Valuations have collapsed, exchanges bankrupted, and billions of dollars
                    washed away. But is it really a crisis? Or is the immense promise and
                    potential of this dynamic new asset class stronger than it’s ever been? This
                    isn’t the first crypto boom and bust (likely not the last), and with every
                    cycle exciting, emerging innovative opportunities rise to the surface and
                    provide untapped potential for the informed investor.
                    </p>
                    <p>
                    Investment and crypto expert Sam Volkering delves into the turmoil and unlocks
                    the realities and potential of the still-emerging crypto opportunity.
                    </p>
                    <p>
                    The Crypto Handbook is a must-have guide to the fundamentals of crypto and
                    digital assets, covering topics such as exchanges, blockchain, NFTs, Web3, the
                    metaverse and much more. Learn how to construct a robust crypto portfolio, how
                    to secure and protect your crypto assets, how to put your crypto to work using
                    decentralised finance, and how to spot and avoid threats and scams. This
                    indispensable book reveals the latest thinking on the present and future of
                    crypto, from some of the sector’s leaders and innovators.
                    </p>',
                'image' => '21.webp',
                'isbn' => '9781804090121',
                'author' => 'Sam Volkering',
                'publisher' => 'Harriman House',
                'stocks' => 30,
                'pages' => 234,
                'weight' => 420,
                'price' => 179.90
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'How I Made $2,000,000 in the Stock Market',
                'description' => '<p>"THE TIMELESS BESTSELLER"</p>
                    <p>
                    The amazing story of a world-famous dancer who trained himself to become one
                    of the most successful investors in stock market history.
                    </p>
                    <p>But how to start? How to find what stocks to buy? How to obtain it?</p>
                    <p>
                    Hungarian by birth, Nicolas Darvas trained as an economist at the University
                    of Budapest. Reluctant to remain in Hungary until either the Nazis or the
                    Soviets took over, he fled at the age of 23 with a forged exit visa and fifty
                    pounds sterling to stave off hunger in Istanbul, Turkey. During his off hours
                    as a dancer, he read some 200 books on the market and the great speculators,
                    spending as much as eight hours a day studying.
                    </p>
                    <p>
                    Darvas invested his money into a couple of stocks that had been hitting their
                    52-week high. He was utterly surprised that the stocks continued to rise and
                    subsequently sold them to make a large profit. His main source of stock
                    selection was Barron\'s Magazine. At the age of 39, after accumulating his
                    fortune, Darvas documented his techniques in the book, How I Made 2,000,000 in
                    the Stock Market.
                    </p>
                    <p>
                    The book describes his unique "Box System", which he used to buy and sell
                    stocks. Darvas\' book remains a classic stock market text to this day. Darvas\'
                    story is remarkable because he was able to achieve significant financial
                    success in a relatively short period of time. However, his results may not be
                    typical or easily replicable. The book primarily serves as a personal account
                    of Darvas\' trading journey and the lessons he learned along the way.
                    </p>',
                'image' => '22.webp',
                'isbn' => '9789670015279',
                'author' => 'Nicolas Darvas',
                'publisher' => 'Acepremier.com',
                'stocks' => 30,
                'pages' => 156,
                'weight' => 220,
                'price' => 35.00
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'Rich Dad Poor Dad (25th Anniversary Edition)',
                'description' => '<p>
                    April of 2022 marks a 25-year milestone for the personal finance classic Rich
                    Dad Poor Dad that still ranks as the #1 Personal Finance book of all time. And
                    although 25 years have passed since Rich Dad Poor Dad was first published,
                    readers will find that very little in the book itself has changed - and for
                    good reason. While so much in our world is changing a high speed, the lessons
                    about money and the principles of Rich Dad Poor Dad haven\'t changed. Today, as
                    money continues to play a key role in our daily lives, the messages in Robert
                    Kiyosaki\'s international bestseller are more timely and more important than
                    ever.
                    </p>
                    <p>Milestones</p>
                    <p>
                    While there is a milestone to commemorate - and a new section in the book on
                    Why Milestones Are Important - preserving the integrity of the original
                    content is testimony to the fact that this book has truly stood the test of
                    time. The sidebars throughout the book (that were updated for the 20-year
                    anniversary edition) have been updated again, but the core principles that
                    parents and grandparents - those who embraced Robert\'s story and messages 25
                    years ago - are sharing them with new generations who have found that its
                    timeless wisdom and no-nonsense lessons can be applied to anyone\'s life and
                    their vision for a future that includes taking control of their finances.
                    </p>
                    <p>
                    People of all cultures and countries celebrate milestones. We use them to
                    measure time, mark progress, reflect on the lessons we\'ve learned, and
                    celebrate accomplishments... and they give meaning to our life\'s journey. They
                    are a way that we integrate past, present, and future... looking back at where
                    we started, where we are today... and the promise of all that the future can
                    hold.
                    </p>',
                'image' => '23.webp',
                'isbn' => '9781612681139',
                'author' => 'Robert Kiyosaki',
                'publisher' => 'Plata',
                'stocks' => 30,
                'pages' => 348,
                'weight' => 204,
                'price' => 46.95
            ],
            [
                'type' => 'Non-Fiction',
                'title' => 'Killer ChatGPT Prompts: Harness the Power of AI for Success and Profit',
                'description' => '<p>
                    Unlock the full capabilities of ChatGPT at work, at home, and in your
                    day-to-day
                    </p>
                    <p>
                    By now, you’ve heard of ChatGPT and its incredible potential. You may even
                    have tried to use it a few times just to see it in action for yourself. But
                    have you ever wondered what ChatGPT is truly capable of?
                    </p>
                    <p>
                    Killer ChatGPT Prompts: Harness the Power of AI for Success and Profit will
                    show you the true power of Large Language Models (LLMs) like ChatGPT. In the
                    book, veteran IT educator and trusted author Guy Hart-Davis shows you the
                    exact prompts he’s discovered to unlock a huge variety of expert business
                    writing, like emails and proposals, data analysis use cases, lesson plans,
                    information exchange scripts, and more!
                    </p>',
                'image' => '24.webp',
                'isbn' => '9781394225255',
                'author' => 'Guy Hart-Davis',
                'publisher' => 'Wiley',
                'stocks' => 30,
                'pages' => 240,
                'weight' => 272,
                'price' => 89.78
            ],
        ];

        foreach ($books as $value) {
            Book::create($value);
        }
    }
}
