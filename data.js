
export const religions = {
    buddhism: {
        id: 'buddhism',
        name: 'Buddhism',
        color: '#FF7F00', // Orange (Saffron)
        icon: 'fa-dharmachakra',
        hero: {
            image: './hero-image.png', // Placeholder, ideally specific to Buddha meditating
            title: 'What is Buddhism?',
            intro: 'Buddhism is a path of practice and spiritual development leading to Insight into the true nature of reality. Buddhist practices like meditation are means of changing yourself in order to develop the qualities of awareness, kindness, and wisdom.',
            stats: [
                { label: 'Founded', value: 'c. 5th Century BCE' },
                { label: 'Founder', value: 'Siddhartha Gautama' },
                { label: 'Adherents', value: '~520 Million' }
            ]
        },
        tabs: {
            history: {
                title: 'History of Buddhism',
                content: `
          <div class="content-block">
            <h3>The Life of the Buddha</h3>
            <p>Siddhartha Gautama was born in Lumbini (modern-day Nepal) around the 5th century BCE into the royal Shakya clan. Despite living a sheltered life of luxury, he was moved by the suffering he saw outside the palace walls—old age, sickness, and death. At 29, he renounced his princely life (The Great Renunciation) to seek the truth.</p>
            <p>After years of asceticism, he discovered the Middle Way. At 35, meditating under the Bodhi tree in Bodh Gaya, he attained Enlightenment and became the Buddha ("The Awakened One"). He spent the next 45 years teaching the Dhamma until his Parinirvana at Kushinagar at age 80.</p>
          </div>
          <div class="content-block">
            <h3>Ashoka and the Spread of Buddhism</h3>
            <p>Emperor Ashoka the Great (3rd century BCE) played a pivotal role. After the bloody Kalinga War, he embraced Buddhism and promoted non-violence (Ahimsa). He sent missionaries across Asia, including his son Mahinda to Sri Lanka, spreading the Dhamma far beyond India's borders.</p>
          </div>
          <div class="content-block">
             <h3>Buddhist Cosmology & Time</h3>
             <p><strong>Buddhist Year:</strong> The Buddhist calendar starts from the Buddha's Parinirvana. For example, 2024 CE is approximately 2568 BE (Buddhist Era).</p>
             <p><strong>28 Buddhas:</strong> Theravada tradition acknowledges 28 past Buddhas, with Siddhartha Gautama being the most recent and Metteyya (Maitreya) predicted as the future Buddha.</p>
             <p><strong>31 Planes of Existence:</strong> Buddhism describes a complex cosmology of 31 planes where beings are reborn, ranging from hell realms to heavenly Brahma realms, divided into Formless, Form, and Sensual worlds.</p>
          </div>
          <div class="content-block">
            <h3>Major Schools</h3>
            <ul>
              <li><strong>Theravada:</strong> "School of the Elders". Predominant in Sri Lanka, Thailand, Myanmar, Laos, Cambodia. Focuses on the Pali Canon and the Arhat path.</li>
              <li><strong>Mahayana:</strong> "Great Vehicle". Predominant in China, Japan, Korea, Vietnam. Emphasizes the Bodhisattva path and compassion for all beings.</li>
              <li><strong>Vajrayana:</strong> "Diamond Vehicle". Predominant in Tibet, Bhutan, Mongolia. Esoteric aspects and Tantra.</li>
            </ul>
          </div>
        `
            },
            teachings: {
                title: 'Core Teachings',
                content: `
          <div class="content-block">
            <h3>The Four Noble Truths</h3>
            <ol>
              <li><strong>Dukkha:</strong> Life involves suffering/unsatisfactoriness.</li>
              <li><strong>Samudaya:</strong> The origin of suffering is craving (Tanha).</li>
              <li><strong>Nirodha:</strong> The cessation of suffering is possible (Nirvana).</li>
              <li><strong>Magga:</strong> The path to the cessation of suffering is the Noble Eightfold Path.</li>
            </ol>
          </div>
           <div class="content-block">
            <h3>The Five Precepts (Pancha Sila)</h3>
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
            <h3>Kalama Sutta</h3>
            <p>Often called the "Charter of Free Inquiry", the Buddha advised the Kalamas not to accept teachings just by tradition, scripture, or authority, but to verify them through their own experience and wisdom to see if they lead to benefit and happiness.</p>
          </div>
          <div class="content-block">
            <h3>Dhammapada Verse 183</h3>
            <blockquote class="scripture-quote">
              "To avoid all evil, to cultivate good, and to cleanse one's mind—this is the teaching of the Buddhas."
            </blockquote>
          </div>
        `
            },
            resources: {
                title: 'Resources & Scriptures',
                content: `
          <div class="resource-grid">
            <div class="resource-item">
              <h4>Pali Canon (Tipitaka)</h4>
              <p>The standard collection of scriptures in the Theravada Buddhist tradition, preserved in the Pali language. It consists of three "baskets": Vinaya (rules), Sutta (discourses), and Abhidhamma (analysis).</p>
            </div>
            <div class="resource-item">
              <h4>Chinese Buddhist Canon</h4>
              <p>A massive collection of texts used in Mahayana traditions, including famous sutras like the Heart Sutra and Lotus Sutra.</p>
            </div>
             <div class="resource-item">
              <h4>Tibetan Buddhist Canon</h4>
              <p>Comprising the Kangyur (words of the Buddha) and Tengyur (commentaries).</p>
            </div>
            <div class="resource-item">
              <h4>Recommended Reading</h4>
              <ul>
                <li><em>"What the Buddha Taught"</em> by Walpola Rahula</li>
                <li><em>"In the Buddha's Words"</em> by Bhikkhu Bodhi</li>
                <li><em>"Old Path White Clouds"</em> by Thich Nhat Hanh</li>
              </ul>
            </div>
          </div>
        `
            }
        }
    },
    hinduism: {
        id: 'hinduism',
        name: 'Hinduism',
        color: '#FF4500', // Dark Orange (Orange Red)
        icon: 'fa-om',
        hero: {
            image: null, // Placeholder
            title: 'What is Hinduism?',
            intro: 'Hinduism is one of the world\'s oldest religions and has no single founder. It is a synthesis of various Indian cultures and traditions, with diverse roots. It emphasizes Dharma (duty/cosmic law), Karma (action/consequence), and Moksha (liberation).',
            stats: [
                { label: 'Founded', value: 'c. 15th Century BCE' },
                { label: 'Core Texts', value: 'Vedas, Upanishads' },
                { label: 'Adherents', value: '~1.2 Billion' }
            ]
        },
        tabs: {
            history: {
                title: 'History of Hinduism',
                content: `
          <div class="content-block">
            <h3>Origins and Vedic Period</h3>
            <p>Hinduism's roots trace back to the Iron Age India and arguably the Indus Valley Civilization. The Vedic period (c. 1500–500 BCE) saw the composition of the Vedas, the oldest sacred texts, focusing on rituals and sacrifices to deities like Indra and Agni.</p>
          </div>
          <div class="content-block">
            <h3>Classical Period</h3>
            <p>Between 200 BCE and 500 CE, the major epics (Mahabharata and Ramayana) were written. This era saw the rise of the major sects: Vaishnavism, Shaivism, and Shaktism. Temple worship became prominent.</p>
          </div>
           <div class="content-block">
            <h3>Modern Era</h3>
            <p>The 19th and 20th centuries saw the Hindu Renaissance with reformers like Raja Ram Mohan Roy, Swami Vivekananda, and Mahatma Gandhi who reinterpreted ancient traditions for the modern world and emphasized social justice and Vedanta.</p>
          </div>
        `
            },
            teachings: {
                title: 'Core Concepts',
                content: `
          <div class="content-block">
            <h3>Purusharthas (Four Goals of Life)</h3>
            <ol>
              <li><strong>Dharma:</strong> Righteousness, duty.</li>
              <li><strong>Artha:</strong> Wealth, prosperity.</li>
              <li><strong>Kama:</strong> Desire, pleasure.</li>
              <li><strong>Moksha:</strong> Liberation from the cycle of rebirth.</li>
            </ol>
          </div>
           <div class="content-block">
            <h3>Karma and Samsara</h3>
            <p>The belief that every action has a consequence, determining one's future rebirths in the cycle of Samsara. Liberation (Moksha) is breaking this cycle.</p>
          </div>
          <div class="content-block">
            <h3>Yoga</h3>
            <p>Various paths to union with the Divine: Bhakti (devotion), Jnana (knowledge), Karma (action), and Raja (meditation) Yoga.</p>
          </div>
           <div class="content-block">
            <h3>Bhagavad Gita Verse 2.47</h3>
            <blockquote class="scripture-quote">
              "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
            </blockquote>
          </div>
        `
            },
            resources: {
                title: 'Scriptures & Texts',
                content: `
          <div class="resource-grid">
            <div class="resource-item">
              <h4>The Vedas</h4>
              <p>The foundational scriptures: Rigveda, Samaveda, Yajurveda, and Atharvaveda.</p>
            </div>
            <div class="resource-item">
              <h4>The Upanishads</h4>
              <p>Philosophical texts exploring the nature of reality (Brahman) and the self (Atman).</p>
            </div>
             <div class="resource-item">
              <h4>The Bhagavad Gita</h4>
              <p>A 700-verse scripture that is part of the Mahabharata, presenting a synthesis of Hindu ideas.</p>
            </div>
            <div class="resource-item">
              <h4>Recommended Reading</h4>
              <ul>
                <li><em>"The Bhagavad Gita"</em> (Various translations)</li>
                <li><em>"Autobiography of a Yogi"</em> by Paramahansa Yogananda</li>
                <li><em>"The Hindu View of Life"</em> by Sarvepalli Radhakrishnan</li>
              </ul>
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
        icon: 'fa-hand-holding-heart',
        hero: {
            image: null,
            title: 'What is Jainism?',
            intro: 'Jainism is an ancient Indian religion prescribing a path of non-violence (Ahimsa) towards all living beings. Jains believe that the universe is eternal and that every living being has a soul capable of becoming a god (Tirthankara) through self-conquest.',
            stats: [
                { label: 'Founded', value: 'c. 6th Century BCE' },
                { label: 'Key Figure', value: 'Mahavira' },
                { label: 'Adherents', value: '~6 Million' }
            ]
        },
        tabs: {
            history: {
                title: 'History of Jainism',
                content: `
           <div class="content-block">
            <h3>The Tirthankaras</h3>
            <p>Jainism traces its history through a succession of 24 Tirthankaras (spiritual teachers) in the current cosmic cycle. The first was Rishabhanatha, and the 24th was Mahavira (599–527 BCE), who revitalized the faith.</p>
          </div>
          <div class="content-block">
            <h3>Schism</h3>
            <p>Around the 4th century BCE, Jainism divided into two major sects: Digambara ("sky-clad", monks possess no property and wear no clothes) and Svetambara ("white-clad", monks wear white robes).</p>
          </div>
           <div class="content-block">
            <h3>Influence</h3>
            <p>Despite being a smaller community, Jains have had a profound influence on Indian culture, particularly contributing to the philosophy of non-violence that inspired Gandhi.</p>
          </div>
        `
            },
            teachings: {
                title: 'Five Great Vows (Mahavratas)',
                content: `
          <div class="content-block">
            <ol>
              <li><strong>Ahimsa:</strong> Non-violence (absolute compassion for all life).</li>
              <li><strong>Satya:</strong> Truthfulness.</li>
              <li><strong>Asteya:</strong> Non-stealing.</li>
              <li><strong>Brahmacharya:</strong> Chastity/Celibacy.</li>
              <li><strong>Aparigraha:</strong> Non-attachment/Non-possession.</li>
            </ol>
          </div>
          <div class="content-block">
            <h3>Anekantavada</h3>
            <p>The doctrine of "many-sidedness" or pluralism. Truth and reality are perceived differently from diverse points of view, and no single point of view is the complete truth.</p>
          </div>
           <div class="content-block">
            <h3>Tattvartha Sutra 7.21</h3>
            <blockquote class="scripture-quote">
              "Parasparopagraho Jivanam" — Souls render service to one another.
            </blockquote>
          </div>
        `
            },
            resources: {
                title: 'Agamas & Texts',
                content: `
          <div class="resource-grid">
            <div class="resource-item">
              <h4>Jain Agamas</h4>
              <p>The canonical texts based on Mahavira's teachings. Svetambaras accept 45 canonical texts; Digambaras believe the original texts were lost and use other secondary texts.</p>
            </div>
            <div class="resource-item">
              <h4>Tattvartha Sutra</h4>
              <p>A compendium of Jain logic and philosophy accepted by both major sects.</p>
            </div>
            <div class="resource-item">
              <h4>Recommended Reading</h4>
              <ul>
                <li><em>"Jainism: An Introduction"</em> by Jeffery D. Long</li>
                <li><em>"The Jains"</em> by Paul Dundas</li>
              </ul>
            </div>
          </div>
        `
            }
        }
    },
    sikhism: {
        id: 'sikhism',
        name: 'Sikhism',
        color: '#000080', // Navy Blue
        icon: 'fa-khanda',
        hero: {
            image: null,
            title: 'What is Sikhism?',
            intro: 'Sikhism (Sikhi) is a monotheistic religion founded in the Punjab region of the Indian subcontinent. It focuses on the oneness of the Creator and the equality of all humankind. Sikhs strive for spiritual growth through meditation and serving humanity.',
            stats: [
                { label: 'Founded', value: '1469 CE' },
                { label: 'Founder', value: 'Guru Nanak' },
                { label: 'Adherents', value: '~30 Million' }
            ]
        },
        tabs: {
            history: {
                title: 'History of Sikhism',
                content: `
          <div class="content-block">
            <h3>The Ten Gurus</h3>
            <p>Sikhism was established by Guru Nanak (1469–1539) and subsequently led by nine other human Gurus. The 10th Guru, Guru Gobind Singh, finalized the scripture as the eternal Guru.</p>
          </div>
          <div class="content-block">
            <h3>Khalsa</h3>
            <p>In 1699, Guru Gobind Singh established the Khalsa, a community of initiated Sikhs committed to the faith and wearing the "Five Ks" (Kesh, Kangha, Kara, Kachera, Kirpan).</p>
          </div>
           <div class="content-block">
            <h3>Guru Granth Sahib</h3>
            <p>Before his passing, Guru Gobind Singh declared the Guru Granth Sahib (the holy scripture) as the final and eternal Guru of the Sikhs.</p>
          </div>
        `
            },
            teachings: {
                title: 'Three Pillars',
                content: `
           <div class="content-block">
            <ol>
              <li><strong>Naam Japna:</strong> Meditating on the name of God.</li>
              <li><strong>Kirat Karo:</strong> Earning a living by honest means.</li>
              <li><strong>Vand Chakko:</strong> Sharing one's earnings with the needy (Seva/Service).</li>
            </ol>
          </div>
          <div class="content-block">
            <h3>Ik Onkar</h3>
            <p>The core belief in "One With Everything". God is formless, genderless, and beyond time.</p>
          </div>
           <div class="content-block">
            <h3>Mool Mantar</h3>
            <blockquote class="scripture-quote">
              "Ik Onkar Satnaam Kartaa Purakh Nirbhau Nirvair Akaal Moorat Ajuni Saibhang Gurprasad" <br>
              (One Universal Creator God, The Name Is Truth, Creative Being Personified, No Fear, No Hatred, Image Of The Undying, Beyond Birth, Self-Existent, By Guru's Grace.)
            </blockquote>
          </div>
        `
            },
            resources: {
                title: 'Scripture',
                content: `
          <div class="resource-grid">
            <div class="resource-item">
              <h4>Guru Granth Sahib</h4>
              <p>The central religious text of Sikhism, regarded as the final Guru. It contains hymns and poetry from the Sikh Gurus and saints from other traditions.</p>
            </div>
             <div class="resource-item">
              <h4>Rehat Maryada</h4>
              <p>The code of conduct and conventions for Sikhism.</p>
            </div>
            <div class="resource-item">
              <h4>Recommended Reading</h4>
              <ul>
                <li><em>"A History of the Sikhs"</em> by Khushwant Singh</li>
                <li><em>"The Sikhs"</em> by Patwant Singh</li>
              </ul>
            </div>
          </div>
        `
            }
        }
    }
};
