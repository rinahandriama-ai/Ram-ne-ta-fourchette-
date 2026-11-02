/* =====================================================
   RAMÈNE TA FOURCHETTE : script du site
   ===================================================== */

/* ---------- RÉGLAGES À MODIFIER ---------- */

// Adresse Formspree (voir les explications données plus tôt)
const URL_FORMULAIRE = "https://formspree.io/f/VOTRE_IDENTIFIANT";

// Date de l'atelier : (année, mois, jour). Attention : janvier = 0, novembre = 10
const DATE_ATELIER = new Date(2026, 10, 20);

// Heure et lieu (affichés tels quels dans toutes les langues)
const HEURE = "À COMPLÉTER";
const LIEU = "À COMPLÉTER";

// Couleurs des confettis et des fanions
const COULEURS = ["#cf3a24", "#f7a600", "#6b7d2f", "#231b17", "#e8864a"];
const COULEURS_FANIONS = ["#cf3a24", "#fffbf2", "#231b17", "#6b7d2f"];

/* ---------- LANGUES DISPONIBLES ---------- */
const LANGUES = {
  fr: "Français",
  en: "English",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  ar: "العربية",
  ru: "Русский",
};

/* ---------- TRADUCTIONS ----------
   Le français est écrit directement dans index.html.
   Ici : les autres langues, et les messages affichés par le script. */
const TRADUCTIONS = {
  fr: {
    titre_page: "Ramène ta fourchette – Atelier dégustation",
    annonce: "Rendez-vous le <strong>{date}</strong> pour un grand repas partagé !",
    heure_label: "Heure",
    lieu_label: "Lieu",
    compte_plusieurs: "Plus que {n} jours !",
    compte_demain: "C'est demain !",
    compte_aujourdhui: "C'est aujourd'hui !",
    compte_merci: "Merci à tous d'être venus !",
    envoi_en_cours: "Envoi en cours...",
    msg_non_connecte: "Le formulaire n'est pas encore connecté : voir la constante URL_FORMULAIRE dans script.js.",
    msg_succes: "Merci ! Votre inscription a bien été envoyée. À très vite !",
    msg_erreur: "Oups, l'envoi a échoué. Vérifiez votre connexion et réessayez.",
    bouton_envoi: "Je m'inscris",
  },

  en: {
    titre_page: "Ramène ta fourchette – Tasting workshop",
    annonce: "Join us on <strong>{date}</strong> for a big shared meal!",
    heure_label: "Time",
    lieu_label: "Place",
    compte_plusieurs: "Only {n} days to go!",
    compte_demain: "It's tomorrow!",
    compte_aujourdhui: "It's today!",
    compte_merci: "Thank you all for coming!",
    envoi_en_cours: "Sending...",
    msg_non_connecte: "The form is not connected yet: see the URL_FORMULAIRE constant in script.js.",
    msg_succes: "Thank you! Your registration has been sent. See you very soon!",
    msg_erreur: "Oops, sending failed. Check your connection and try again.",
    bouton_envoi: "Sign me up",
    langue_label: "Language",
    surtitre: "Tasting workshop • Cultural diversity",
    slogan: "One meal, a thousand cultures, one big table!",
    sticker: "Good mood included!",
    bouton_concept: "Discover the concept",
    concept_titre: "The workshop concept",
    concept_intro: "This workshop celebrates the richness of our origins and stories through cooking. Each participant prepares a dish or a dessert and shares it with the others: we taste, we talk, we discover.",
    etape1_titre: "1. Choose your dish",
    etape1_texte: "A dish that is emblematic of your country or culture, or simply a dish you love and would like to share.",
    etape2_titre: "2. List the ingredients",
    etape2_texte: "When registering, list the ingredients you used precisely. This is essential to protect people with allergies.",
    etape3_titre: "3. Share it on the big day",
    etape3_texte: "Bring your creation on the day of the workshop, tell us its story and taste the others'.",
    note_html: "<strong>Allergies:</strong> please be as precise as possible about the ingredients and tick the allergens present in your preparation. That way everyone can taste safely.",
    inscription_titre: "Sign up",
    inscription_intro: "Once you have read the concept, fill in the form below.",
    label_prenom: "First name",
    label_nom: "Last name",
    label_email: "Email address",
    ph_email: "to confirm your registration",
    label_type: "You are bringing",
    opt_choisir: "Choose...",
    opt_plat: "A savory dish",
    opt_dessert: "A dessert",
    label_plat: "Name of the dish",
    ph_plat: "E.g. Mafé, Tarte tatin...",
    label_origine: "Country or culture of origin of the dish",
    ph_origine: "E.g. Senegal, Italy, or “a dish I love”",
    label_ingredients: "Detailed list of ingredients",
    ph_ingredients: "E.g. chicken, onions, wheat flour, peanut butter, peanut oil, salt...",
    legend_allergenes: "Allergens present in your dish",
    all_gluten: "Gluten (wheat, rye, barley...)",
    all_crustaces: "Crustaceans",
    all_oeufs: "Eggs",
    all_poisson: "Fish",
    all_arachides: "Peanuts",
    all_soja: "Soy",
    all_lait: "Milk (lactose)",
    all_fruits_coque: "Tree nuts (walnuts, almonds...)",
    all_celeri: "Celery",
    all_moutarde: "Mustard",
    all_sesame: "Sesame",
    all_sulfites: "Sulphites",
    all_lupin: "Lupin",
    all_mollusques: "Molluscs",
    concept_lu: "I have read and understood the workshop concept.",
    confidentialite: "Your information is used only to organise the workshop.",
    footer_texte: "Ramène ta fourchette: together, let's taste the diversity of the world.",
  },

  es: {
    titre_page: "Ramène ta fourchette – Taller de degustación",
    annonce: "¡Nos vemos el <strong>{date}</strong> para una gran comida compartida!",
    heure_label: "Hora",
    lieu_label: "Lugar",
    compte_plusieurs: "¡Solo quedan {n} días!",
    compte_demain: "¡Es mañana!",
    compte_aujourdhui: "¡Es hoy!",
    compte_merci: "¡Gracias a todos por venir!",
    envoi_en_cours: "Enviando...",
    msg_succes: "¡Gracias! Su inscripción se ha enviado correctamente. ¡Hasta muy pronto!",
    msg_erreur: "Vaya, el envío ha fallado. Compruebe su conexión e inténtelo de nuevo.",
    bouton_envoi: "Inscribirme",
    langue_label: "Idioma",
    surtitre: "Taller de degustación • Mezcla de culturas",
    slogan: "¡Una comida, mil culturas, una gran mesa!",
    sticker: "¡Buen humor incluido!",
    bouton_concept: "Descubrir el concepto",
    concept_titre: "El concepto del taller",
    concept_intro: "Este taller celebra la riqueza de nuestros orígenes y de nuestras historias a través de la cocina. Cada participante prepara un plato o un postre y lo comparte con los demás: probamos, conversamos, descubrimos.",
    etape1_titre: "1. Elija su plato",
    etape1_texte: "Un plato emblemático de su país o de su cultura, o simplemente un plato que le guste y quiera compartir.",
    etape2_titre: "2. Detalle los ingredientes",
    etape2_texte: "Al inscribirse, indique con precisión los ingredientes utilizados. Es esencial para proteger a las personas alérgicas.",
    etape3_titre: "3. Comparta el gran día",
    etape3_texte: "Traiga su preparación el día del taller, cuéntenos su historia y pruebe las de los demás.",
    note_html: "<strong>Alergias:</strong> le rogamos que sea lo más preciso posible con los ingredientes y que marque los alérgenos presentes en su preparación. Así, todos podrán degustar con total seguridad.",
    inscription_titre: "Inscribirme",
    inscription_intro: "Una vez leído el concepto, rellene el formulario que aparece a continuación.",
    label_prenom: "Nombre",
    label_nom: "Apellidos",
    label_email: "Correo electrónico",
    ph_email: "para confirmar su inscripción",
    label_type: "Usted trae",
    opt_choisir: "Elegir...",
    opt_plat: "Un plato",
    opt_dessert: "Un postre",
    label_plat: "Nombre del plato",
    ph_plat: "Ej.: Mafé, Tarta tatin...",
    label_origine: "País o cultura de origen del plato",
    ph_origine: "Ej.: Senegal, Italia o «un plato que me gusta»",
    label_ingredients: "Lista detallada de ingredientes",
    ph_ingredients: "Ej.: pollo, cebollas, harina de trigo, mantequilla de cacahuete, aceite de cacahuete, sal...",
    legend_allergenes: "Alérgenos presentes en su preparación",
    all_gluten: "Gluten (trigo, centeno, cebada...)",
    all_crustaces: "Crustáceos",
    all_oeufs: "Huevos",
    all_poisson: "Pescado",
    all_arachides: "Cacahuetes",
    all_soja: "Soja",
    all_lait: "Leche (lactosa)",
    all_fruits_coque: "Frutos de cáscara (nueces, almendras...)",
    all_celeri: "Apio",
    all_moutarde: "Mostaza",
    all_sesame: "Sésamo",
    all_sulfites: "Sulfitos",
    all_lupin: "Altramuces",
    all_mollusques: "Moluscos",
    concept_lu: "He leído y comprendido el concepto del taller.",
    confidentialite: "Sus datos se utilizan únicamente para organizar el taller.",
    footer_texte: "Ramène ta fourchette: juntos, saboreemos la diversidad del mundo.",
  },

  it: {
    titre_page: "Ramène ta fourchette – Laboratorio di degustazione",
    annonce: "Appuntamento: <strong>{date}</strong> per un grande pasto condiviso!",
    heure_label: "Ora",
    lieu_label: "Luogo",
    compte_plusieurs: "Mancano solo {n} giorni!",
    compte_demain: "È domani!",
    compte_aujourdhui: "È oggi!",
    compte_merci: "Grazie a tutti per essere venuti!",
    envoi_en_cours: "Invio in corso...",
    msg_succes: "Grazie! La vostra iscrizione è stata inviata. A presto!",
    msg_erreur: "Ops, l'invio non è riuscito. Controllate la connessione e riprovate.",
    bouton_envoi: "Mi iscrivo",
    langue_label: "Lingua",
    surtitre: "Laboratorio di degustazione • Incontro di culture",
    slogan: "Un pasto, mille culture, un'unica grande tavola!",
    sticker: "Buonumore incluso!",
    bouton_concept: "Scopri il concept",
    concept_titre: "Il concept del laboratorio",
    concept_intro: "Questo laboratorio celebra la ricchezza delle nostre origini e delle nostre storie attraverso la cucina. Ogni partecipante prepara un piatto o un dolce e lo condivide con gli altri: si assaggia, ci si confronta, si scopre.",
    etape1_titre: "1. Scegliete il vostro piatto",
    etape1_texte: "Un piatto emblematico del vostro paese o della vostra cultura, o semplicemente un piatto che amate e che vorreste condividere.",
    etape2_titre: "2. Elencate gli ingredienti",
    etape2_texte: "Al momento dell'iscrizione, elencate con precisione gli ingredienti utilizzati. È essenziale per proteggere le persone allergiche.",
    etape3_titre: "3. Condividete il giorno dell'evento",
    etape3_texte: "Portate la vostra preparazione il giorno del laboratorio, raccontateci la sua storia e assaggiate quelle degli altri.",
    note_html: "<strong>Allergie:</strong> vi chiediamo di essere il più precisi possibile sugli ingredienti e di spuntare gli allergeni presenti nella vostra preparazione. Così tutti potranno assaggiare in sicurezza.",
    inscription_titre: "Mi iscrivo",
    inscription_intro: "Dopo aver letto il concept, compilate il modulo qui sotto.",
    label_prenom: "Nome",
    label_nom: "Cognome",
    label_email: "Indirizzo e-mail",
    ph_email: "per confermare l'iscrizione",
    label_type: "Portate",
    opt_choisir: "Scegli...",
    opt_plat: "Un piatto",
    opt_dessert: "Un dolce",
    label_plat: "Nome del piatto",
    ph_plat: "Es.: Mafé, Tarte tatin...",
    label_origine: "Paese o cultura di origine del piatto",
    ph_origine: "Es.: Senegal, Italia o «un piatto che amo»",
    label_ingredients: "Elenco dettagliato degli ingredienti",
    ph_ingredients: "Es.: pollo, cipolle, farina di grano, burro di arachidi, olio di arachidi, sale...",
    legend_allergenes: "Allergeni presenti nella vostra preparazione",
    all_gluten: "Glutine (grano, segale, orzo...)",
    all_crustaces: "Crostacei",
    all_oeufs: "Uova",
    all_poisson: "Pesce",
    all_arachides: "Arachidi",
    all_soja: "Soia",
    all_lait: "Latte (lattosio)",
    all_fruits_coque: "Frutta a guscio (noci, mandorle...)",
    all_celeri: "Sedano",
    all_moutarde: "Senape",
    all_sesame: "Sesamo",
    all_sulfites: "Solfiti",
    all_lupin: "Lupini",
    all_mollusques: "Molluschi",
    concept_lu: "Ho letto e compreso il concept del laboratorio.",
    confidentialite: "I vostri dati servono esclusivamente all'organizzazione del laboratorio.",
    footer_texte: "Ramène ta fourchette: insieme, assaggiamo la diversità del mondo.",
  },

  pt: {
    titre_page: "Ramène ta fourchette – Workshop de degustação",
    annonce: "Marque na agenda: <strong>{date}</strong> — uma grande refeição partilhada!",
    heure_label: "Hora",
    lieu_label: "Local",
    compte_plusieurs: "Faltam apenas {n} dias!",
    compte_demain: "É amanhã!",
    compte_aujourdhui: "É hoje!",
    compte_merci: "Obrigado a todos por terem vindo!",
    envoi_en_cours: "A enviar...",
    msg_succes: "Obrigado! A sua inscrição foi enviada. Até breve!",
    msg_erreur: "Ups, o envio falhou. Verifique a ligação e tente novamente.",
    bouton_envoi: "Inscrever-me",
    langue_label: "Idioma",
    surtitre: "Workshop de degustação • Mistura de culturas",
    slogan: "Uma refeição, mil culturas, uma grande mesa!",
    sticker: "Bom humor incluído!",
    bouton_concept: "Descobrir o conceito",
    concept_titre: "O conceito do workshop",
    concept_intro: "Este workshop celebra a riqueza das nossas origens e das nossas histórias através da cozinha. Cada participante prepara um prato ou uma sobremesa e partilha-o com os outros: provamos, conversamos, descobrimos.",
    etape1_titre: "1. Escolha o seu prato",
    etape1_texte: "Um prato emblemático do seu país ou da sua cultura, ou simplesmente um prato de que gosta e que gostaria de partilhar.",
    etape2_titre: "2. Detalhe os ingredientes",
    etape2_texte: "No momento da inscrição, indique com precisão os ingredientes utilizados. É essencial para proteger as pessoas alérgicas.",
    etape3_titre: "3. Partilhe no grande dia",
    etape3_texte: "Traga a sua preparação no dia do workshop, conte-nos a sua história e prove as dos outros.",
    note_html: "<strong>Alergias:</strong> pedimos que seja o mais preciso possível quanto aos ingredientes e que assinale os alergénios presentes na sua preparação. Assim, todos poderão provar em segurança.",
    inscription_titre: "Inscrever-me",
    inscription_intro: "Depois de ler o conceito, preencha o formulário abaixo.",
    label_prenom: "Nome próprio",
    label_nom: "Apelido",
    label_email: "Endereço de e-mail",
    ph_email: "para confirmar a sua inscrição",
    label_type: "Vai trazer",
    opt_choisir: "Escolher...",
    opt_plat: "Um prato",
    opt_dessert: "Uma sobremesa",
    label_plat: "Nome do prato",
    ph_plat: "Ex.: Mafé, Tarte tatin...",
    label_origine: "País ou cultura de origem do prato",
    ph_origine: "Ex.: Senegal, Itália ou «um prato de que gosto»",
    label_ingredients: "Lista detalhada dos ingredientes",
    ph_ingredients: "Ex.: frango, cebolas, farinha de trigo, manteiga de amendoim, óleo de amendoim, sal...",
    legend_allergenes: "Alergénios presentes na sua preparação",
    all_gluten: "Glúten (trigo, centeio, cevada...)",
    all_crustaces: "Crustáceos",
    all_oeufs: "Ovos",
    all_poisson: "Peixe",
    all_arachides: "Amendoins",
    all_soja: "Soja",
    all_lait: "Leite (lactose)",
    all_fruits_coque: "Frutos de casca rija (nozes, amêndoas...)",
    all_celeri: "Aipo",
    all_moutarde: "Mostarda",
    all_sesame: "Sésamo",
    all_sulfites: "Sulfitos",
    all_lupin: "Tremoço",
    all_mollusques: "Moluscos",
    concept_lu: "Li e compreendi o conceito do workshop.",
    confidentialite: "Os seus dados servem apenas para organizar o workshop.",
    footer_texte: "Ramène ta fourchette: juntos, saboreemos a diversidade do mundo.",
  },

  ar: {
    titre_page: "Ramène ta fourchette – ورشة تذوّق",
    annonce: "موعدنا <strong>{date}</strong> لوجبة كبيرة نتشاركها!",
    heure_label: "الساعة",
    lieu_label: "المكان",
    compte_plusieurs: "الأيام المتبقية: {n}",
    compte_demain: "الحدث غدًا!",
    compte_aujourdhui: "الحدث اليوم!",
    compte_merci: "شكرًا لكل من حضر!",
    envoi_en_cours: "جارٍ الإرسال...",
    msg_succes: "شكرًا لك! تم إرسال تسجيلك بنجاح. إلى اللقاء قريبًا!",
    msg_erreur: "عذرًا، فشل الإرسال. تحقّق من اتصالك وحاول مرة أخرى.",
    bouton_envoi: "سجّلني",
    langue_label: "اللغة",
    surtitre: "ورشة تذوّق • تلاقي الثقافات",
    slogan: "وجبة واحدة، ألف ثقافة، مائدة واحدة كبيرة!",
    sticker: "المرح مضمون!",
    bouton_concept: "اكتشف الفكرة",
    concept_titre: "فكرة الورشة",
    concept_intro: "تحتفي هذه الورشة بثراء أصولنا وحكاياتنا من خلال الطبخ. يُعدّ كل مشارك طبقًا أو حلوى ويتقاسمه مع الآخرين: نتذوّق، نتبادل الحديث، ونكتشف.",
    etape1_titre: "1. اختر طبقك",
    etape1_texte: "طبق يرمز إلى بلدك أو ثقافتك، أو ببساطة طبق تحبه وترغب في مشاركته.",
    etape2_titre: "2. فصّل المكوّنات",
    etape2_texte: "عند التسجيل، اذكر المكوّنات المستخدمة بدقة. هذا أمر أساسي لحماية الأشخاص الذين يعانون من الحساسية.",
    etape3_titre: "3. شاركه في اليوم الموعود",
    etape3_texte: "أحضر طبقك يوم الورشة، واحكِ لنا قصته، وتذوّق أطباق الآخرين.",
    note_html: "<strong>الحساسية:</strong> نرجو منك أن تكون دقيقًا قدر الإمكان في ذكر المكوّنات وأن تحدّد مسببات الحساسية الموجودة في طبقك، حتى يتمكّن الجميع من التذوّق بأمان.",
    inscription_titre: "سجّل الآن",
    inscription_intro: "بعد قراءة الفكرة، املأ النموذج أدناه.",
    label_prenom: "الاسم الأول",
    label_nom: "اسم العائلة",
    label_email: "البريد الإلكتروني",
    ph_email: "لتأكيد تسجيلك",
    label_type: "ستحضر",
    opt_choisir: "اختر...",
    opt_plat: "طبقًا",
    opt_dessert: "حلوى",
    label_plat: "اسم الطبق",
    ph_plat: "مثال: مافي، تارت تاتان...",
    label_origine: "بلد أو ثقافة أصل الطبق",
    ph_origine: "مثال: السنغال، إيطاليا، أو «طبق أحبه»",
    label_ingredients: "قائمة مفصّلة بالمكوّنات",
    ph_ingredients: "مثال: دجاج، بصل، دقيق القمح، زبدة الفول السوداني، زيت الفول السوداني، ملح...",
    legend_allergenes: "مسببات الحساسية الموجودة في طبقك",
    all_gluten: "غلوتين (قمح، شيلم، شعير...)",
    all_crustaces: "القشريات",
    all_oeufs: "البيض",
    all_poisson: "السمك",
    all_arachides: "الفول السوداني",
    all_soja: "الصويا",
    all_lait: "الحليب (اللاكتوز)",
    all_fruits_coque: "المكسرات (الجوز، اللوز...)",
    all_celeri: "الكرفس",
    all_moutarde: "الخردل",
    all_sesame: "السمسم",
    all_sulfites: "الكبريتات",
    all_lupin: "الترمس",
    all_mollusques: "الرخويات",
    concept_lu: "لقد قرأت فكرة الورشة وفهمتها.",
    confidentialite: "تُستخدم معلوماتك فقط لتنظيم الورشة.",
    footer_texte: "Ramène ta fourchette: لنتذوّق معًا تنوّع العالم.",
  },

  ru: {
    titre_page: "Ramène ta fourchette – Дегустационный мастер-класс",
    annonce: "Ждём вас: <strong>{date}</strong> — большое совместное застолье!",
    heure_label: "Время",
    lieu_label: "Место",
    compte_plusieurs: "Осталось дней: {n}",
    compte_demain: "Это уже завтра!",
    compte_aujourdhui: "Это сегодня!",
    compte_merci: "Спасибо всем, кто пришёл!",
    envoi_en_cours: "Отправка...",
    msg_succes: "Спасибо! Ваша регистрация отправлена. До скорой встречи!",
    msg_erreur: "Упс, не удалось отправить. Проверьте соединение и попробуйте ещё раз.",
    bouton_envoi: "Записаться",
    langue_label: "Язык",
    surtitre: "Дегустационный мастер-класс • Смешение культур",
    slogan: "Одна трапеза, тысяча культур, один большой стол!",
    sticker: "Хорошее настроение включено!",
    bouton_concept: "Узнать о концепции",
    concept_titre: "Концепция мастер-класса",
    concept_intro: "Этот мастер-класс прославляет богатство наших корней и историй через кулинарию. Каждый участник готовит блюдо или десерт и делится им с остальными: мы пробуем, общаемся, открываем новое.",
    etape1_titre: "1. Выберите блюдо",
    etape1_texte: "Блюдо, характерное для вашей страны или культуры, или просто блюдо, которое вы любите и хотите разделить с другими.",
    etape2_titre: "2. Укажите ингредиенты",
    etape2_texte: "При регистрации точно перечислите использованные ингредиенты. Это очень важно для защиты людей с аллергией.",
    etape3_titre: "3. Поделитесь в день встречи",
    etape3_texte: "Принесите своё блюдо в день мастер-класса, расскажите нам его историю и попробуйте блюда других.",
    note_html: "<strong>Аллергии:</strong> пожалуйста, указывайте ингредиенты как можно точнее и отмечайте аллергены, присутствующие в вашем блюде. Так каждый сможет пробовать без риска.",
    inscription_titre: "Записаться",
    inscription_intro: "Прочитав концепцию, заполните форму ниже.",
    label_prenom: "Имя",
    label_nom: "Фамилия",
    label_email: "Адрес электронной почты",
    ph_email: "для подтверждения регистрации",
    label_type: "Вы приносите",
    opt_choisir: "Выбрать...",
    opt_plat: "Блюдо",
    opt_dessert: "Десерт",
    label_plat: "Название блюда",
    ph_plat: "Напр.: мафе, тарт татен...",
    label_origine: "Страна или культура происхождения блюда",
    ph_origine: "Напр.: Сенегал, Италия или «блюдо, которое я люблю»",
    label_ingredients: "Подробный список ингредиентов",
    ph_ingredients: "Напр.: курица, лук, пшеничная мука, арахисовое масло, соль...",
    legend_allergenes: "Аллергены в вашем блюде",
    all_gluten: "Глютен (пшеница, рожь, ячмень...)",
    all_crustaces: "Ракообразные",
    all_oeufs: "Яйца",
    all_poisson: "Рыба",
    all_arachides: "Арахис",
    all_soja: "Соя",
    all_lait: "Молоко (лактоза)",
    all_fruits_coque: "Орехи (грецкие, миндаль...)",
    all_celeri: "Сельдерей",
    all_moutarde: "Горчица",
    all_sesame: "Кунжут",
    all_sulfites: "Сульфиты",
    all_lupin: "Люпин",
    all_mollusques: "Моллюски",
    concept_lu: "Я прочитал(а) и понял(а) концепцию мастер-класса.",
    confidentialite: "Ваши данные используются только для организации мастер-класса.",
    footer_texte: "Ramène ta fourchette: вместе попробуем разнообразие мира.",
  },
};

/* ---------- GESTION DE LA LANGUE ---------- */
let langue = "fr";

// Renvoie le texte d'une clé dans la langue courante (sinon en français)
function t(cle) {
  const courant = TRADUCTIONS[langue] || {};
  if (courant[cle] !== undefined) return courant[cle];
  const francais = TRADUCTIONS.fr[cle];
  return francais !== undefined ? francais : cle;
}

// Traduit tous les éléments marqués data-i18n dans index.html
function traduirePage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.dataset.fr === undefined) el.dataset.fr = el.innerHTML;
    const dico = TRADUCTIONS[langue] || {};
    const texte = langue === "fr" ? undefined : dico[el.dataset.i18n];
    el.innerHTML = texte !== undefined ? texte : el.dataset.fr;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    if (el.dataset.frPlaceholder === undefined) el.dataset.frPlaceholder = el.placeholder;
    const dico = TRADUCTIONS[langue] || {};
    const texte = langue === "fr" ? undefined : dico[el.dataset.i18nPlaceholder];
    el.placeholder = texte !== undefined ? texte : el.dataset.frPlaceholder;
  });
}

// Met à jour les textes calculés : date, calendrier, infos, compte à rebours...
function majDynamique() {
  const formatLong = new Intl.DateTimeFormat(langue, {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  }).format(DATE_ATELIER);

  document.title = t("titre_page");
  document.getElementById("annonce-texte").innerHTML = t("annonce").replace("{date}", formatLong);
  document.getElementById("date-pied").textContent = formatLong;

  document.getElementById("cal-mois").textContent =
    new Intl.DateTimeFormat(langue, { month: "long", year: "numeric" }).format(DATE_ATELIER);
  document.getElementById("cal-jour").textContent = String(DATE_ATELIER.getDate());
  document.getElementById("cal-nom").textContent =
    new Intl.DateTimeFormat(langue, { weekday: "long" }).format(DATE_ATELIER);

  document.getElementById("infos").textContent =
    t("heure_label") + " : " + HEURE + "  •  " + t("lieu_label") + " : " + LIEU;

  majCompteARebours();

  if (retour.dataset.cle) retour.textContent = t(retour.dataset.cle);
}

function majCompteARebours() {
  const compte = document.getElementById("compte-a-rebours");
  const aujourdhui = new Date();
  aujourdhui.setHours(0, 0, 0, 0);
  const cible = new Date(DATE_ATELIER);
  cible.setHours(0, 0, 0, 0);
  const jours = Math.round((cible - aujourdhui) / 86400000);

  if (jours > 1) {
    compte.textContent = t("compte_plusieurs").replace("{n}", jours);
  } else if (jours === 1) {
    compte.textContent = t("compte_demain");
  } else if (jours === 0) {
    compte.textContent = t("compte_aujourdhui");
  } else {
    compte.textContent = t("compte_merci");
  }
}

function changerLangue(code) {
  if (!LANGUES[code]) code = "fr";
  langue = code;

  document.documentElement.lang = code;
  document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
  selecteur.value = code;

  try {
    localStorage.setItem("langue-atelier", code);
  } catch (e) {
    // Le navigateur refuse de mémoriser : ce n'est pas grave
  }

  traduirePage();
  majDynamique();
}

/* ---------- GUIRLANDE DE FANIONS ---------- */
const fanions = document.getElementById("fanions");
for (let i = 0; i < 40; i++) {
  const fanion = document.createElement("span");
  fanion.style.borderTopColor = COULEURS_FANIONS[i % COULEURS_FANIONS.length];
  fanion.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
  fanions.appendChild(fanion);
}

/* ---------- BANDEAU « BIENVENUE » : on double le contenu pour une boucle fluide ---------- */
const defile = document.getElementById("defile");
defile.innerHTML += defile.innerHTML;

/* ---------- LOGO DE L'UNIVERSITÉ : si l'image est absente, on affiche le nom en texte ---------- */
document.querySelectorAll(".logo-univ").forEach((lien) => {
  const image = lien.querySelector("img");
  const imageAbsente = () => lien.classList.add("sans-image");
  image.addEventListener("error", imageAbsente);
  if (image.complete && image.naturalWidth === 0) imageAbsente();
});

/* ---------- CONFETTIS ---------- */
function confettis(nombre) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (let i = 0; i < nombre; i++) {
    const piece = document.createElement("span");
    const taille = 6 + Math.random() * 8;
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.width = taille + "px";
    piece.style.height = taille * 1.5 + "px";
    piece.style.backgroundColor = COULEURS[Math.floor(Math.random() * COULEURS.length)];
    piece.style.animationDuration = (3 + Math.random() * 3).toFixed(2) + "s";