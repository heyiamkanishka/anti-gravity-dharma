
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
            <p><a href="https://en.wikipedia.org/wiki/The_Buddha" target="_blank">Siddhartha Gautama</a> was born in Lumbini (modern-day Nepal) around the 5th century BCE into the royal Shakya clan. Despite living a sheltered life of luxury, he was moved by the suffering he saw outside the palace walls—old age, sickness, and death. At 29, he renounced his princely life (<a href="https://en.wikipedia.org/wiki/Great_Renunciation" target="_blank">The Great Renunciation</a>) to seek the truth.</p>
            <p>After years of asceticism, he discovered the Middle Way. At 35, meditating under the Bodhi tree in Bodh Gaya, he attained Enlightenment and became the Buddha ("The Awakened One"). He spent the next 45 years teaching the Dhamma until his <a href="https://en.wikipedia.org/wiki/Parinirvana" target="_blank">Parinirvana</a> at Kushinagar at age 80.</p>
          </div>
          <div class="content-block">
            <h3>Ashoka and the Spread of Buddhism</h3>
            <p><a href="https://en.wikipedia.org/wiki/Ashoka" target="_blank">Emperor Ashoka the Great</a> (3rd century BCE) played a pivotal role. After the bloody Kalinga War, he embraced Buddhism and promoted non-violence (Ahimsa). He sent missionaries across Asia, including his son Mahinda to Sri Lanka, spreading the Dhamma far beyond India's borders.</p>
          </div>
          <div class="content-block">
             <h3><a href="https://en.wikipedia.org/wiki/Buddhist_cosmology" target="_blank">Buddhist Cosmology</a> & Time</h3>
             <p><strong>Buddhist Year:</strong> The Buddhist calendar starts from the Buddha's Parinirvana. For example, 2024 CE is approximately 2568 BE (Buddhist Era).</p>
             <p><strong><a href="https://en.wikipedia.org/wiki/List_of_the_named_Buddhas" target="_blank">28 Buddhas</a>:</strong> Theravada tradition acknowledges 28 past Buddhas, with Siddhartha Gautama being the most recent and Metteyya (Maitreya) predicted as the future Buddha.</p>
             <p><strong><a href="https://en.wikipedia.org/wiki/Buddhist_cosmology#Vertical_cosmology" target="_blank">31 Planes of Existence</a>:</strong> Buddhism describes a complex cosmology of 31 planes where beings are reborn, ranging from hell realms to heavenly Brahma realms, divided into Formless, Form, and Sensual worlds.</p>
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
