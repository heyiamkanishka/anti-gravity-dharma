
export const religions = {
  buddhism: {
    id: 'buddhism',
    name: 'Buddhism',
    color: '#FFD700', // Yellow (Gold)
    iconType: 'class',
    icon: 'fa-dharmachakra',
    hero: {
      image: './buddha_hero.png',
      title: 'What is Buddhism?',
      intro: '<a href="https://en.wikipedia.org/wiki/Buddhism" target="_blank" style="color:inherit">Buddhism</a> is a path of practice and spiritual development leading to Insight into the true nature of reality. Buddhist practices like <a href="https://en.wikipedia.org/wiki/Meditation" target="_blank" style="color:inherit">meditation</a> are means of changing yourself in order to develop the qualities of awareness, kindness, and wisdom.',
      stats: [
        { label: 'Founded', value: 'c. 5th Century BCE' },
        { label: 'Founder', value: '<a href="https://en.wikipedia.org/wiki/The_Buddha" target="_blank" style="color:inherit">Siddhartha Gautama</a>' },
        { label: 'Adherents', value: '~520 Million' }
      ]
    },
    tabs: {
      history: {
        title: 'History of Buddhism',
        content: `
          <div class="content-block">
            <h3>The Life of the Buddha</h3>
            <p><a href="https://en.wikipedia.org/wiki/The_Buddha" target="_blank" style="color:inherit">Siddhartha Gautama</a>, who would later be known as the Buddha, was born in <a href="https://en.wikipedia.org/wiki/Lumbini" target="_blank" style="color:inherit">Lumbini</a> (present-day Nepal) around 563 BCE into the royal Shakya clan. His father, King Suddhodana, ruled the small kingdom of Kapilavastu, and his mother, Queen Maya, died seven days after giving birth. A prophecy declared that the child would either become a universal monarch or a fully awakened teacher who would save the world from suffering. Determined to see his son follow the royal path, the king surrounded Siddhartha with every conceivable luxury and pleasure, shielding him completely from any sight of pain, aging, or death.</p>
            
            <p>At sixteen, Siddhartha married his cousin Yasodhara. Together they lived in three magnificent palaces designed for the different seasons, filled with music, beautiful attendants, lotus ponds, and every sensual delight. For twenty-nine years he knew nothing of the world's harsher realities. Then, one day, he asked his charioteer Channa to take him beyond the palace grounds.</p>
            
            <p>On four successive trips he encountered what are now called the <a href="https://en.wikipedia.org/wiki/Four_sights" target="_blank" style="color:inherit">Four Sights</a>. First he saw an old man, bent over, toothless, gray-haired, trembling with age. Siddhartha asked, "Will this happen to me?" Channa replied, "It happens to everyone, my lord." On the second trip he saw a sick man lying by the road, wracked with pain and fever. Siddhartha learned that disease can strike anyone, regardless of wealth or status. On the third trip he saw a corpse being carried to the cremation ground, surrounded by weeping relatives. For the first time he understood that death comes to every living being without exception. On the fourth trip he saw a wandering ascetic. The man wore simple robes, carried a begging bowl, and had a serene, radiant expression despite having no possessions. Siddhartha asked, "What is this man seeking?" Channa answered, "He has left home to find freedom from old age, sickness, and death."</p>

            <p>These four encounters shattered the prince's world. He realized that all his palaces, pleasures, and power were meaningless in the face of inevitable suffering. One night, after looking one last time at his sleeping wife and newborn son Rahula, he left the palace forever. This is known as the <a href="https://en.wikipedia.org/wiki/Great_Renunciation" target="_blank" style="color:inherit">Great Renunciation</a>. At the age of twenty-nine, wearing simple clothes and with his hair cut, he became a wandering seeker of truth.</p>
            
            <p>For six years Siddhartha practiced extreme asceticism under various teachers. He learned deep meditation and mastered the highest states of concentration, but found they did not lead to ultimate liberation. He then joined five ascetics and practiced such severe austerities that he nearly starved to death. At one point he lived on a single grain of rice a day. His body became skeletal, yet enlightenment still did not come. He finally realized that torturing the body was as useless as indulging it. There must be a Middle Path between luxury and austerity.</p>
            
            <p>He accepted a bowl of milk rice from a village girl named Sujata, bathed in the Nairanjana River, and sat beneath a fig tree (later called the <a href="https://en.wikipedia.org/wiki/Bodhi_Tree" target="_blank" style="color:inherit">Bodhi Tree</a>) in <a href="https://en.wikipedia.org/wiki/Bodh_Gaya" target="_blank" style="color:inherit">Bodh Gaya</a>, vowing not to rise until he had attained complete awakening.</p>

            <p>That night he faced his final trial. <a href="https://en.wikipedia.org/wiki/Mara_(demon)" target="_blank" style="color:inherit">Mara</a>, the force of delusion and temptation, attacked him with armies of demons, storms, and beautiful daughters offering sensual pleasure. Siddhartha remained unmoved. He touched the earth with his right hand, calling the earth itself to witness his years of virtue. The earth roared in affirmation, and Mara fled defeated.</p>

            <p>Through the three watches of the night, Siddhartha penetrated the true nature of reality. He saw all his past lives, understood the workings of karma, and perceived the arising and ceasing of suffering in all beings. At dawn, at the age of thirty-five, he attained complete, perfect enlightenment. He became the Buddha – the Awakened One.</p>

            <p>For seven weeks he remained in the area of the Bodhi Tree, experiencing the bliss of liberation. At first he hesitated to teach, thinking the truth he had realized was too profound for others to understand. But the god Brahma appeared and begged him to teach out of compassion for suffering beings. The Buddha agreed.</p>

            <p>He walked to the Deer Park in Sarnath near Varanasi and found his former five ascetic companions. There he gave his first sermon, setting in motion the Wheel of Dharma. He taught the <a href="https://en.wikipedia.org/wiki/Four_Noble_Truths" target="_blank" style="color:inherit">Four Noble Truths</a>:</p>
            
            <ul>
                <li>Life is characterized by suffering (dukkha)</li>
                <li>Suffering has a cause: craving and ignorance</li>
                <li>Suffering can end</li>
                <li>There is a path to the end of suffering: the <a href="https://en.wikipedia.org/wiki/Noble_Eightfold_Path" target="_blank" style="color:inherit">Noble Eightfold Path</a></li>
            </ul>

            <p>The five ascetics became his first disciples and the first members of the <a href="https://en.wikipedia.org/wiki/Sangha" target="_blank" style="color:inherit">Sangha</a> (monastic community). Soon sixty enlightened disciples were sent out to teach, and the Buddha's dispensation began to spread.</p>

            <p>For the next forty-five years, the Buddha walked the roads of northern India teaching everyone – kings and outcastes, merchants and ascetics, men and women – without discrimination. He established communities of monks and nuns, taught householders how to live ethically and happily, and gave profound discourses on mindfulness, meditation, karma, rebirth, and the path to nirvana.</p>

            <p>He returned several times to his home kingdom, where his father, stepmother, wife Yasodhara, and son Rahula all joined the order. His cousin Ananda became his devoted attendant for the last twenty-five years of his life.</p>

            <p>At the age of eighty, in the town of <a href="https://en.wikipedia.org/wiki/Kushinagar" target="_blank" style="color:inherit">Kushinagar</a>, the Buddha announced that he would soon pass away. He ate a meal offered by a blacksmith named Cunda (traditionally described as either pork or mushrooms – the texts are ambiguous), became ill, but insisted that Cunda was not to be blamed.</p>

            <p>Lying on his right side between two sal trees, surrounded by hundreds of disciples, he gave his final teaching: "All conditioned things are subject to decay. Strive on with diligence." Then, entering deeper and deeper meditative absorptions, he passed into final nirvana – complete liberation beyond birth and death.</p>

            <p>The Buddha's last words remain one of the most powerful summaries of spiritual life ever spoken. His teaching – the Dhamma – and the community he founded continue to guide millions of people 2,600 years later, offering a practical, compassionate path to awakening that is as relevant today as it was in ancient India.</p>
          </div>
          <div class="content-block">
            <h3>Ashoka and the Spread of Buddhism</h3>
            <p><strong><a href="https://en.wikipedia.org/wiki/Ashoka" target="_blank">Emperor Ashoka the Great</a></strong> (reigned approximately 268–232 BCE) was the third king of the Maurya Empire and remains one of the most remarkable rulers in world history. Through his dramatic transformation from ruthless conqueror to compassionate promoter of peace, he turned Buddhism from a small Indian teaching into a major world religion that reached Sri Lanka, Southeast Asia, Central Asia, and even the Mediterranean.</p>
            
            <p>Ashoka was the grandson of Chandragupta Maurya, the founder of the empire, and the son of Bindusara. Ancient sources describe the young Ashoka as fierce, ambitious, and highly capable. Legend says he killed several of his brothers to secure the throne and earned the nickname "Chandashoka" – Ashoka the Cruel.</p>

            <p>In the eighth year of his reign, Ashoka launched a massive invasion of Kalinga (modern Odisha) on India’s east coast. The war was brutally successful. According to his own Rock Edict XIII, more than 100,000 soldiers and civilians were killed, 150,000 were taken captive, and many more died from wounds, starvation, and disease. When Ashoka walked across the battlefield and saw the scale of suffering – rivers of blood, burning villages, orphaned children, and grieving families – he was overcome with remorse. He later wrote: <em>"When an independent country is conquered, the slaughter, death, and deportation of its people that ensue are extremely grievous to His Majesty and weigh heavily on his mind."</em></p>

            <p>This profound crisis of conscience changed him forever. He encountered a Buddhist monk named Upagupta whose calm presence and teaching touched him deeply. Ashoka embraced Buddhism, gave up violent conquest, and devoted the rest of his life to spreading the Dhamma.</p>
            
            <figure style="margin: 2rem 0; text-align: center;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Buddhist_Expansion.svg" alt="Map of Buddhist Expansion" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1);">
                <figcaption style="color: var(--color-text-muted); font-size: 0.9rem; margin-top: 0.5rem;">Map of the spread of Buddhism under Ashoka and beyond.</figcaption>
            </figure>

            <p>Importantly, Ashoka did not make Buddhism the state religion or force conversion on anyone. Instead he created a universal ethical policy he called "Dhamma" that was acceptable to people of all faiths. Its core principles were: <strong>Ahimsa</strong> (non-violence), respect for elders, kindness to all beings, generosity, and religious tolerance.</p>

            <p>Most crucially, he organized the greatest missionary campaign in ancient history. In the words of his own edicts, he sent emissaries "for the welfare and happiness of the many" to Sri Lanka, Myanmar, Thailand, Cambodia, Syria, Egypt, Greece, Macedonia, and North Africa.</p>

            <p>The best-known mission went to Sri Lanka. Ashoka dispatched his own son Mahinda and daughter Sanghamitta to the island. Mahinda converted King Devanampiya Tissa, and Sanghamitta brought a cutting from the original Bodhi Tree. That tree still grows in Anuradhapura and is the oldest documented tree in the world.</p>
          </div>
          <div class="content-block">
             <h3><a href="https://en.wikipedia.org/wiki/Buddhist_cosmology" target="_blank">Buddhist Cosmology</a> & Time</h3>
             <p><strong>Buddhist Year:</strong> The Buddhist calendar starts from the Buddha's Parinirvana. For example, 2024 CE is approximately 2568 BE (Buddhist Era).</p>
             <p><strong><a href="28_buddhas.html" target="_blank" style="color: var(--color-religion); font-weight: bold;">28 Buddhas</a>:</strong> Theravada tradition acknowledges 28 past Buddhas, with Siddhartha Gautama being the most recent and Metteyya (Maitreya) predicted as the future Buddha. <a href="28_buddhas.html" target="_blank">Read their story here.</a></p>
             <p><strong><a href="31_planes.html" target="_blank" style="color: var(--color-religion); font-weight: bold;">31 Planes of Existence</a>:</strong> Buddhism describes a complex cosmology of 31 planes where beings are reborn, ranging from hell realms to heavenly Brahma realms. <a href="31_planes.html" target="_blank">Explore the cosmology here.</a></p>
          </div>
          <div class="content-block">
            <h3>Major Schools</h3>
            <ul>
              <li><strong><a href="https://en.wikipedia.org/wiki/Theravada" target="_blank">Theravada</a>:</strong> "School of the Elders". Predominant in Sri Lanka, Thailand, Myanmar. Focuses on the Pali Canon.</li>
              <li><strong><a href="https://en.wikipedia.org/wiki/Mahayana" target="_blank">Mahayana</a>:</strong> "Great Vehicle". Predominant in China, Japan, Korea. Emphasizes the Bodhisattva path.</li>
              <li><strong><a href="https://en.wikipedia.org/wiki/Vajrayana" target="_blank">Vajrayana</a>:</strong> "Diamond Vehicle". Predominant in Tibet, Bhutan. Esoteric aspects and Tantra.</li>
            </ul>
          </div>
        `
      },
      teachings: {
        title: 'Core Teachings',
        content: `
          <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Four_Noble_Truths" target="_blank">The Four Noble Truths</a></h3>
            <ol>
              <li><strong>Dukkha:</strong> Life involves suffering/unsatisfactoriness.</li>
              <li><strong>Samudaya:</strong> The origin of suffering is craving (Tanha).</li>
              <li><strong>Nirodha:</strong> The cessation of suffering is possible (Nirvana).</li>
              <li><strong>Magga:</strong> The path to the cessation of suffering is the <a href="https://en.wikipedia.org/wiki/Noble_Eightfold_Path" target="_blank">Noble Eightfold Path</a>.</li>
            </ol>
          </div>
           <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Five_Precepts" target="_blank">The Five Precepts</a> (Pancha Sila)</h3>
            <p>The fundamental code of ethics for lay Buddhists:</p>
            <ol>
              <li>Abstain from killing living beings.</li>
              <li>Abstain from taking what is not given (stealing).</li>
              <li>Abstain from sexual misconduct.</li>
              <li>Abstain from false speech.</li>
              <li>Abstain from intoxicants.</li>
            </ol>
          </div>
          <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Kesamutti_Sutta" target="_blank">Kalama Sutta</a></h3>
            <p>Often called the "Charter of Free Inquiry", the Buddha advised the Kalamas not to accept teachings just by tradition, scripture, or authority, but to verify them through their own experience.</p>
          </div>
          <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Dhammapada" target="_blank">Dhammapada</a> Verse 183</h3>
            <blockquote class="scripture-quote">
              "To avoid all evil, to cultivate good, and to cleanse one's mind—this is the teaching of the Buddhas."
            </blockquote>
          </div>
        `
      },
      resources: {
        title: 'Resources & Books',
        content: `
          <div class="content-block">
             <h3>Scriptural Canons</h3>
             <ul>
                 <li><a href="https://en.wikipedia.org/wiki/Pali_Canon" target="_blank">Pali Canon (Tipitaka)</a></li>
                 <li><a href="https://en.wikipedia.org/wiki/Chinese_Buddhist_canon" target="_blank">Chinese Buddhist Canon</a></li>
                 <li><a href="https://en.wikipedia.org/wiki/Tibetan_Buddhist_canon" target="_blank">Tibetan Buddhist Canon</a></li>
             </ul>
          </div>
          <div class="resource-grid">
            <div class="resource-item">
              <h4>Top 15 Books on Buddhism</h4>
              <ul style="list-style: none; padding-left: 0;">
                <li>1. <strong>The Heart of the Buddha's Teaching</strong> by Thich Nhat Hanh</li>
                <li>2. <strong>What the Buddha Taught</strong> by Walpola Rahula</li>
                <li>3. <strong>In the Buddha's Words</strong> by Bhikkhu Bodhi</li>
                <li>4. <strong>The Art of Happiness</strong> by Dalai Lama</li>
                <li>5. <strong>Mindfulness in Plain English</strong> by Bhante Gunaratana</li>
                <li>6. <strong>Zen Mind, Beginner's Mind</strong> by Shunryu Suzuki</li>
                <li>7. <strong>The Miracle of Mindfulness</strong> by Thich Nhat Hanh</li>
                <li>8. <strong>Buddhism for Beginners</strong> by Thubten Chodron</li>
                <li>9. <strong>Start Where You Are</strong> by Pema Chödrön</li>
                <li>10. <strong>Old Path White Clouds</strong> by Thich Nhat Hanh</li>
                <li>11. <strong>Freedom from the Known</strong> by J. Krishnamurti</li>
                <li>12. <strong>The Tibetan Book of Living and Dying</strong> by Sogyal Rinpoche</li>
                <li>13. <strong>Siddhartha</strong> by Hermann Hesse</li>
                <li>14. <strong>The Dhammapada</strong> (Eknath Easwaran Translation)</li>
                <li>15. <strong>When Things Fall Apart</strong> by Pema Chödrön</li>
              </ul>
              <p style="margin-top:1rem"><a href="https://www.amazon.com/buddhism-Books/s?k=buddhism&rh=n%3A283155" target="_blank" class="nav-link" style="display:inline-block; border-bottom:1px solid currentColor;">View on Amazon</a></p>
            </div>
          </div>
        `
      }
    }
  },
  hinduism: {
    id: 'hinduism',
    name: 'Hinduism',
    color: '#FF4500', // Dark Orange
    iconType: 'class',
    icon: 'fa-om',
    hero: {
      image: './hindu_trinity_hero.png',
      title: 'What is Hinduism?',
      intro: '<a href="https://en.wikipedia.org/wiki/Hinduism" target="_blank" style="color:inherit">Hinduism</a> is one of the world\'s oldest religions. It is a synthesis of various Indian cultures and traditions. It emphasizes <a href="https://en.wikipedia.org/wiki/Dharma" target="_blank" style="color:inherit">Dharma</a> (duty/cosmic law), Karma (action/consequence), and Moksha (liberation).',
      stats: [
        { label: 'Founded', value: 'c. 15th Century BCE' },
        { label: 'Core Texts', value: '<a href="https://en.wikipedia.org/wiki/Vedas" target="_blank" style="color:inherit">Vedas</a>, <a href="https://en.wikipedia.org/wiki/Upanishads" target="_blank" style="color:inherit">Upanishads</a>' },
        { label: 'Adherents', value: '~1.2 Billion' }
      ]
    },
    tabs: {
      history: {
        title: 'History of Hinduism',
        content: `
          <div class="content-block">
            <h3>Origins and Vedic Period</h3>
            <p>Hinduism's roots trace back to the <a href="https://en.wikipedia.org/wiki/Vedic_period" target="_blank">Vedic period</a> (c. 1500–500 BCE) and the Indus Valley Civilization. This era saw the composition of the <a href="https://en.wikipedia.org/wiki/Vedas" target="_blank">Vedas</a>, the oldest sacred texts, focusing on rituals and sacrifices to deities like Indra and Agni.</p>
          </div>
          <div class="content-block">
            <h3>Classical Period & The Epics</h3>
            <p>Between 200 BCE and 500 CE, the major epics (<a href="https://en.wikipedia.org/wiki/Mahabharata" target="_blank">Mahabharata</a> and <a href="https://en.wikipedia.org/wiki/Ramayana" target="_blank">Ramayana</a>) were written. This era saw the rise of the major sects: Vaishnavism, Shaivism, and Shaktism. Temple worship became prominent.</p>
          </div>
          <div class="content-block">
             <h3><a href="https://en.wikipedia.org/wiki/Hindu_cosmology" target="_blank">Hindu Cosmology</a></h3>
             <p>Hindu cosmology involves cycles of four <a href="https://en.wikipedia.org/wiki/Yuga" target="_blank">Yugas</a> (Satya, Treta, Dvapara, and Kali). Time is cyclical and infinite. The universe is created by Brahma, sustained by Vishnu, and destroyed by Shiva in an endless cycle.</p>
          </div>
        `
      },
      teachings: {
        title: 'Core Concepts',
        content: `
          <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Purushartha" target="_blank">Purusharthas</a> (Four Goals of Life)</h3>
            <ol>
              <li><strong>Dharma:</strong> Righteousness, duty.</li>
              <li><strong>Artha:</strong> Wealth, prosperity.</li>
              <li><strong>Kama:</strong> Desire, pleasure.</li>
              <li><strong>Moksha:</strong> Liberation from the cycle of rebirth.</li>
            </ol>
          </div>
           <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Karma_in_Hinduism" target="_blank">Karma</a> and <a href="https://en.wikipedia.org/wiki/Sa%E1%B9%83s%C4%81ra" target="_blank">Samsara</a></h3>
            <p>The belief that every action has a consequence, determining one's future rebirths in the cycle of Samsara. Liberation (Moksha) is breaking this cycle.</p>
          </div>
          <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Yoga" target="_blank">Yoga</a></h3>
            <p>Various paths to union with the Divine: Bhakti (devotion), Jnana (knowledge), Karma (action), and Raja (meditation) Yoga.</p>
          </div>
           <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Bhagavad_Gita" target="_blank">Bhagavad Gita</a> Verse 2.47</h3>
            <blockquote class="scripture-quote">
              "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action."
            </blockquote>
          </div>
        `
      },
      resources: {
        title: 'Scriptures & Books',
        content: `
           <div class="content-block">
             <h3>Key Texts</h3>
             <ul>
                 <li><a href="https://en.wikipedia.org/wiki/Vedas" target="_blank">The Vedas</a></li>
                 <li><a href="https://en.wikipedia.org/wiki/Upanishads" target="_blank">The Upanishads</a></li>
                 <li><a href="https://en.wikipedia.org/wiki/Bhagavad_Gita" target="_blank">The Bhagavad Gita</a></li>
             </ul>
          </div>
          <div class="resource-grid">
             <div class="resource-item">
              <h4>Top Books on Hinduism</h4>
              <ul style="list-style: none; padding-left: 0;">
                <li>1. <strong>The Bhagavad Gita</strong> (Eknath Easwaran)</li>
                <li>2. <strong>Autobiography of a Yogi</strong> by Paramahansa Yogananda</li>
                <li>3. <strong>The Hindu View of Life</strong> by S. Radhakrishnan</li>
                <li>4. <strong>I Am That</strong> by Nisargadatta Maharaj</li>
                <li>5. <strong>Be Here Now</strong> by Ram Dass</li>
                <li>6. <strong>The Upanishads</strong> (Eknath Easwaran)</li>
                <li>7. <strong>Raja Yoga</strong> by Swami Vivekananda</li>
                <li>8. <strong>Karma Yoga</strong> by Swami Vivekananda</li>
                <li>9. <strong>Jaya: An Illustrated Retelling of the Mahabharata</strong> by Devdutt Pattanaik</li>
                <li>10. <strong>Myths of the Hindus & Buddhists</strong> by Sister Nivedita</li>
                <li>11. <strong>The Gospel of Sri Ramakrishna</strong></li>
                <li>12. <strong>Aghora: At the Left Hand of God</strong> by Robert Svoboda</li>
                <li>13. <strong>Living with the Himalayan Masters</strong> by Swami Rama</li>
                <li>14. <strong>Shankara's Crest-Jewel of Discrimination</strong></li>
                <li>15. <strong>Hinduism: A Very Short Introduction</strong> by Kim Knott</li>
              </ul>
              <p style="margin-top:1rem"><a href="https://www.amazon.com/s?k=hinduism+books" target="_blank" class="nav-link" style="display:inline-block; border-bottom:1px solid currentColor;">View on Amazon</a></p>
            </div>
          </div>
        `
      }
    }
  },
  jainism: {
    id: 'jainism',
    name: 'Jainism',
    color: '#FFFFFF', // White
    iconType: 'image',
    icon: './jain_hand_icon.png',
    hero: {
      image: './mahavira_hero.png',
      title: 'What is Jainism?',
      intro: '<a href="https://en.wikipedia.org/wiki/Jainism" target="_blank" style="color:inherit">Jainism</a> is an ancient Indian religion prescribing a path of non-violence (<a href="https://en.wikipedia.org/wiki/Ahimsa_in_Jainism" target="_blank" style="color:inherit">Ahimsa</a>) towards all living beings. Jains believe that the universe is eternal and that every living being has a soul capable of becoming a god (Tirthankara).',
      stats: [
        { label: 'Founded', value: 'c. 6th Century BCE' },
        { label: 'Key Figure', value: '<a href="https://en.wikipedia.org/wiki/Mahavira" target="_blank" style="color:inherit">Mahavira</a>' },
        { label: 'Adherents', value: '~6 Million' }
      ]
    },
    tabs: {
      history: {
        title: 'History of Jainism',
        content: `
           <div class="content-block">
            <h3>The <a href="https://en.wikipedia.org/wiki/Tirthankara" target="_blank">Tirthankaras</a></h3>
            <p>Jainism traces its history through a succession of 24 Tirthankaras (spiritual teachers) in the current cosmic cycle. The first was <a href="https://en.wikipedia.org/wiki/Rishabhanatha" target="_blank">Rishabhanatha</a>, and the 24th was <a href="https://en.wikipedia.org/wiki/Mahavira" target="_blank">Mahavira</a> (599–527 BCE), who revitalized the faith.</p>
          </div>
          <div class="content-block">
            <h3>Schism: Digambara & Svetambara</h3>
            <p>Around the 4th century BCE, Jainism divided into two major sects: <a href="https://en.wikipedia.org/wiki/Digambara" target="_blank">Digambara</a> ("sky-clad", monks possess no property and wear no clothes) and <a href="https://en.wikipedia.org/wiki/Svetambara" target="_blank">Svetambara</a> ("white-clad", monks wear white robes).</p>
          </div>
           <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Jain_cosmology" target="_blank">Jain Cosmology</a></h3>
            <p>Jain cosmology describes the universe as an uncreated entity, existing since infinity, having no beginning or end. It is shaped like a man standing with arms akimbo and legs apart (Loka-Purusha).</p>
          </div>
        `
      },
      teachings: {
        title: 'Five Great Vows (Mahavratas)',
        content: `
          <div class="content-block">
            <ol>
              <li><strong><a href="https://en.wikipedia.org/wiki/Ahimsa_in_Jainism" target="_blank">Ahimsa</a>:</strong> Non-violence (absolute compassion for all life).</li>
              <li><strong>Satya:</strong> Truthfulness.</li>
              <li><strong>Asteya:</strong> Non-stealing.</li>
              <li><strong>Brahmacharya:</strong> Chastity/Celibacy.</li>
              <li><strong>Aparigraha:</strong> Non-attachment/Non-possession.</li>
            </ol>
          </div>
          <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Anekantavada" target="_blank">Anekantavada</a></h3>
            <p>The doctrine of "many-sidedness" or pluralism. Truth and reality are perceived differently from diverse points of view.</p>
          </div>
           <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Tattvartha_Sutra" target="_blank">Tattvartha Sutra</a> 7.21</h3>
            <blockquote class="scripture-quote">
              "Parasparopagraho Jivanam" — Souls render service to one another.
            </blockquote>
          </div>
        `
      },
      resources: {
        title: 'Books & Agamas',
        content: `
          <div class="resource-grid">
            <div class="resource-item">
              <h4>Top Books on Jainism</h4>
              <ul style="list-style: none; padding-left: 0;">
                <li>1. <strong>Jainism: An Introduction</strong> by Jeffery D. Long</li>
                <li>2. <strong>The Jains</strong> by Paul Dundas</li>
                <li>3. <strong>The Tattvartha Sutra</strong> in translations</li>
                <li>4. <strong>Ahimsa: A Multidimensional Approach</strong></li>
                <li>5. <strong>Jain Way of Life</strong> by Yogendra Jain</li>
                <li>6. <strong>Life of Mahavira</strong> by Manik Chand Jain</li>
                <li>7. <strong>Jainism: The World of Conquerors</strong> by Natubhai Shah</li>
                <li>8. <strong>Outlines of Jainism</strong> by Jagmanderlal Jaini</li>
                <li>9. <strong>The Scientific Foundations of Jainism</strong></li>
                <li>10. <strong>Essence of Jainism</strong></li>
                <li>(More titles accessible via search)</li>
              </ul>
              <p style="margin-top:1rem"><a href="https://www.amazon.com/s?k=jainism+books" target="_blank" class="nav-link" style="display:inline-block; border-bottom:1px solid currentColor;">View on Amazon</a></p>
            </div>
          </div>
        `
      }
    }
  },
  sikhism: {
    id: 'sikhism',
    name: 'Sikhism',
    color: '#FF0000', // Red, as requested (previously Navy Blue)
    iconType: 'class',
    icon: 'fa-khanda',
    hero: {
      image: './guru_nanak_hero.png',
      title: 'What is Sikhism?',
      intro: '<a href="https://en.wikipedia.org/wiki/Sikhism" target="_blank" style="color:inherit">Sikhism</a> (Sikhi) is a monotheistic religion founded in the Punjab region. It focuses on the oneness of the Creator and the equality of all humankind. Sikhs strive for spiritual growth through meditation and serving humanity.',
      stats: [
        { label: 'Founded', value: '1469 CE' },
        { label: 'Founder', value: '<a href="https://en.wikipedia.org/wiki/Guru_Nanak" target="_blank" style="color:inherit">Guru Nanak</a>' },
        { label: 'Adherents', value: '~30 Million' }
      ]
    },
    tabs: {
      history: {
        title: 'History of Sikhism',
        content: `
          <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Sikh_gurus" target="_blank">The Ten Gurus</a></h3>
            <p>Sikhism was established by <a href="https://en.wikipedia.org/wiki/Guru_Nanak" target="_blank">Guru Nanak</a> (1469–1539) and subsequently led by nine other human Gurus. The 10th Guru, <a href="https://en.wikipedia.org/wiki/Guru_Gobind_Singh" target="_blank">Guru Gobind Singh</a>, finalized the scripture as the eternal Guru.</p>
          </div>
          <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Khalsa" target="_blank">Khalsa</a></h3>
            <p>In 1699, Guru Gobind Singh established the Khalsa, a community of initiated Sikhs committed to the faith and wearing the "Five Ks" (Kesh, Kangha, Kara, Kachera, Kirpan).</p>
          </div>
           <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Sikh_cosmology" target="_blank">Sikh Cosmology</a></h3>
            <p>Guru Nanak describes the universe as infinite with countless worlds and solar systems ("There are worlds upon worlds, and solar systems upon solar systems"). God alone is the creator and sustainer.</p>
          </div>
        `
      },
      teachings: {
        title: 'Three Pillars',
        content: `
           <div class="content-block">
            <ol>
              <li><strong><a href="https://en.wikipedia.org/wiki/Naam_Japo" target="_blank">Naam Japna</a>:</strong> Meditating on the name of God.</li>
              <li><strong><a href="https://en.wikipedia.org/wiki/Kirat_Karo" target="_blank">Kirat Karo</a>:</strong> Earning a living by honest means.</li>
              <li><strong><a href="https://en.wikipedia.org/wiki/Vand_Chhako" target="_blank">Vand Chakko</a>:</strong> Sharing one's earnings with the needy (Seva).</li>
            </ol>
          </div>
          <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Ik_Onkar" target="_blank">Ik Onkar</a></h3>
            <p>The core belief in "One With Everything". God is formless, genderless, and beyond time.</p>
          </div>
           <div class="content-block">
            <h3><a href="https://en.wikipedia.org/wiki/Mul_Mantar" target="_blank">Mool Mantar</a></h3>
            <blockquote class="scripture-quote">
              "Ik Onkar Satnaam Kartaa Purakh Nirbhau Nirvair Akaal Moorat Ajuni Saibhang Gurprasad"
            </blockquote>
          </div>
        `
      },
      resources: {
        title: 'Resources',
        content: `
          <div class="resource-grid">
             <div class="resource-item">
              <h4>Top Books on Sikhism</h4>
              <ul style="list-style: none; padding-left: 0;">
                <li>1. <strong>A History of the Sikhs</strong> by Khushwant Singh</li>
                <li>2. <strong>The Sikhs</strong> by Patwant Singh</li>
                <li>3. <strong>Guru Granth Sahib</strong> (English Translation)</li>
                <li>4. <strong>The Singing Guru</strong> by Kamla K. Kapur</li>
                <li>5. <strong>Sikhism: A Very Short Introduction</strong> by Eleanor Nesbitt</li>
                <li>6. <strong>Heritage of the Sikhs</strong> by Harbans Singh</li>
                <li>7. <strong>The Name of My Beloved</strong> by Nikky-Guninder Kaur Singh</li>
                <li>8. <strong>Teachings of the Sikh Gurus</strong></li>
                <li>9. <strong>Lost Heritage: The Sikh Legacy in Pakistan</strong> by Amardeep Singh</li>
                <li>10. <strong>Warrior Saints</strong> by Amandeep Singh Madra</li>
                <li>(More titles accessible via search)</li>
              </ul>
              <p style="margin-top:1rem"><a href="https://www.amazon.com/s?k=sikhism+books" target="_blank" class="nav-link" style="display:inline-block; border-bottom:1px solid currentColor;">View on Amazon</a></p>
            </div>
          </div>
        `
      }
    }
  }
};
