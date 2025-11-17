import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Break from "../components/break/break";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import Crosslink from "../components/crosslink/crosslink";
import SpecializationLink from "../components/specialization-link/specializationLink";
import Metabolism from "../components/metabolism/metabolism";
import Section from "../components/section/section";

function ChapterCharacters() {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;

  return (
    <Section
      coordinates={"2"}
      header="Characters"
      introContent={
        <ChapterIntroSpread
          chapterNumber={2}
          title="Characters"
          leftPageContent={
            <>
              <h2>The Physical Body</h2>
              <p>
                Half of the abilities of Cascade Effect characters are provided by the physical body. These are measured
                by the 3 <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolisms</Crosslink>,
                <Metabolism fight />, <Metabolism flight />, and <Metabolism focus />. .
              </p>
              <p>
                Think of Physical Metabolisms not as attributes that represent your talents, but rather resources
                provided by the hardware of the body and brain. They represent how much effort you can bring to a task
                and how much stress you can handle. Each Metabolism is assigned a score, from 3 to 6 for normal humans.
              </p>
              <p>Every action you take, from the athletic to the academic, will use one Physical Metabolism.</p>
            </>
          }
          rightPageContent={
            <>
              <h2>The Hidden Body</h2>
              <p>
                New Cascade Effect characters are beginning to engage with their Hidden Body, a second incorporeal body
                existing in parallel to their physical form, but outside of normal space. Their connection to it is
                starting to manifest as a second set of resources that can supplement the physical body and mind,
                boosting it beyond its normal limits.
              </p>
              <p>
                The Hidden Body is measured by the 3
                <Crosslink inverted target={linkMap.HiddenMetabolisms}>
                  Hidden Metabolisms
                </Crosslink>
                of <Metabolism self />, <Metabolism near />, and <Metabolism far />. These Metabolisms are not available
                to normal humans, and starting characters are only just beginning to access to them.
              </p>
              <p>
                Every action you take will also use one Hidden Metabolism, resulting in a pairing of a physical and
                hidden metabolism.
              </p>
            </>
          }
        />
      }
    >
      <Section header="Creating a Character">
        <p>
          The first step of playing the game is to create the character you will play as. The main statistics of a
          starting character are Metabolisms, Traits, and Action Bonuses. You will define these values by choosing two
          Origins.
        </p>
        <p>
          Origins represent your character's background. You will choose a Physical Origin describing how your character
          came to be who they are, and a Hidden Origin that represents how they came to sense their Hidden Body. Each
          Origin provides prompts and questions to answer that will guide you through choosing your other stats. Keep in
          mind that Origin prompts are guidelines, not strict rules. If you have a better idea for your character than
          one presented in a prompt, go with it.
        </p>
        <p>
          Metabolisms are numbers indicating how much effort, attention, and willpower a character can bring to an
          action.
        </p>
        <p>
          Traits are keywords that flesh out additional details about your character, and they provide a bonus whenever
          they are relevant to an action. They can be almost anything that your character is able to leverage in a
          useful way. Generally, skills, social status, relationships, community membership, authority, wealth,
          possessions, careers, apparent physical traits, fashions, roles you fill, or other advantages are good Traits.
          Don't think too hard about having perfect or precise Traits, they can be vague during character creation. You
          will be able to revise them later during play as you get to know the character.
        </p>
        <p>
          Action Bonuses are a number assigned to each action you can take in combat, representing your skill with
          taking that action quickly while under pressure. For a starting character, most of these will be 0 but a
          couple will be increased to 1 during the steps of character creation. An action bonus of 1 indicates a high
          level of proficiency, normal humans almost never have Action Bonuses above 1, but as your character gains
          experience they may become supernaturally skilled in ways that increase these numbers higher.
        </p>
        <p>
          Specializations are supernatural abilities your character can learn as they refine the connection between
          their physical and hidden bodies. Normally, you gain or increase the rank of Specializations by spending
          experience points you gain after playing a session. However, your Hidden Origin will provide you with one
          Specialization during character creation.
        </p>
        <p>
          Finally, Entanglements and their Styles will not be touched during character creation. They will only come up
          later when your character gains the experience needed to develop these special abilities.
        </p>
        <Section header="Step by Step Characters" isInset>
          <ol>
            <li>
              Choose a character concept.
              <ol>
                <li>
                  Set each <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolism</Crosslink> score to 3,
                  and then choose one that represents your character concept to increase by 1.
                </li>
                <li>
                  Pick 3 <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> that reflect your
                  concept.
                </li>
              </ol>
            </li>
            <li>
              Choose a Physical Origin.
              <ol>
                <li>
                  Following this origin's prompts will give you 3 Traits, increase one Physical Metabolism score, and
                  increase one Action Bonus.
                </li>
              </ol>
            </li>
            <li>
              Choose a Hidden Origin.
              <ol>
                <li>
                  Following this origin's prompts will give you 3 Traits, increase one Physical and one Hidden
                  Metabolism score, and increase one Action Bonus.
                </li>
              </ol>
            </li>
          </ol>
        </Section>
        <Section header="Step 1: Character Concept">
          <p>
            Start imagining your character and write down their name and a character concept. A concept is a few words
            that describe their defining characteristic. Maybe it's a personality type, a hobby, a job title, a combat
            role, or a special talent. It's OK if your concept starts out vague and gets revised as you create this
            character, or can skip writing a concept entirely if you have an idea for a character that your are.
          </p>
          <p>
            Once you have a concept to work with, look at your
            <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolisms</Crosslink>, Fight, Flight, and Focus.
            Start each with a score of 3 points, then choose one that most represents your character concept and
            increase this one to 4.
          </p>
          <p>
            Finally, write in 3 <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>. These can be
            anything, but in general they should somehow represent your character concept. For example, a scientist
            might have Traits representing fields of knowledge and contacts in academia.
          </p>
          <p>
            <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> can be vague at this stage! During
            play, an unspecific
            <Crosslink target={linkMap.AdvantageAndDisadvantage}>Trait</Crosslink> can be revised to something more
            specific as we get to know the character.
          </p>
        </Section>
        <Section header="Step 2: Physical Origin">
          <p>
            A Physical Origin represents the sociopolitical climate your character comes from. This origin is not about
            nationality, culture, or class, but rather the opportunities and restrictions your character experiences due
            to the circumstances they live under.
          </p>
          <p>
            Choose a Physical Origin from the list at the end of this chapter. Once you have chosen, this origin's
            description will give you prompts to follow. Answering the questions in these prompts will guide you in
            choosing a few Traits to gain. It will also guide you to choose a Physical Metabolism to to increase by 1
            and an Action Bonus to increase from 0 to 1.
          </p>
        </Section>
        <Section header="Step 3: Hidden Origin">
          <p>
            A Hidden Origin describes how a character first began to sense their Hidden Body. Maybe it was a first
            chance encounter with supernatural phenomena or maybe it was a long time suspicion about the true nature is
            reality that started this process. Typically, the way your character experiences their Hidden Body slightly
            colors their personality and strongly influences the way they react to their Hidden Metabolisms being
            stressed.
          </p>
          <p>
            Choose a Hidden Origin from the list at the end of this chapter. Once you have chosen, this origin's
            description will give you prompts to follow. Answering the questions in these prompts will guide you in
            choosing a few Traits to gain. It will also guide you to choose a Physical Metabolism to to increase by 1,
            as well as a Hidden Metabolism and an Action Bonus to increase from 0 to 1.
          </p>
          <p>
            Your Hidden Origin will also provide you to choose one Specialization to gain. You can ignore any
            prerequisites for the Specialization you gain in this step. It starts at rank 1, but you can spend
            experience points later to increase the rank. If this Specialization is from an Esoteric Style, you can also
            induce the Cascade Event event associated with this Style.
          </p>
        </Section>
        <Section header="Choosing Traits">
          <p>
            Traits can be almost anything that fleshes out your character and what they bring to the table. They don't
            need to follow the prompts in the origins you choose exactly, or even at all if you have a better idea.
            Traits are quite flexible, work with your GM to define them together.
          </p>
          <p>
            In general Traits should be assets, not flaws. They don't need to be purely useful, even just a description
            of your appearance or demeanor can be a good Trait that helps you fit in with certain people. A Trait can
            even have several downsides, but it shouldn't be purely negative or completely useless.
          </p>
          <p>
            Keep in mind that Traits can be refined during gameplay, so it's ok if they are vague during character
            creation.
          </p>
          <Section header="Combat Skills and Equipment">
            <p>
              <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> chosen at character creation are
              not meant to represent combat proficiency. They will typically not be relevant for standard combat
              actions. For example, a Trait like "Army Marksman" might be relevant in many of situations, but it won't
              help you shoot a gun in the high speed stress and chaos of a real fight. Action Bonuses better represent
              combat proven abilities, and each origin will give you one. Action Bonuses greater than 1 represent a
              level of combat ability typically unavailable to normal humans. Additionally, remember that traits can
              represent gear and assets instead of skills, so if your character is the type that would plausibly have a
              small arsenal of combat equipment, take a trait that represents it.
            </p>
          </Section>
        </Section>
        <Section header="What's Next?">
          <p>
            After finishing your character, you're ready to start their adventure. However, there also are a few cases
            later when you might further edit your character. This can occur during your story's Inciting Incident, any
            time you want to revise one of your Traits, and later as you gain and spend experience to level up your
            character.
          </p>
          <Section header="The Inciting Incident">
            <p>
              Normal humans typically do not have points in the
              <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolisms</Crosslink> and starting characters only
              a single point in one of them. However, this is about to change for your character. Somewhere early after
              the game has started, usually during the first session, the characters will have their first contact with
              the overtly supernatural and this contact will force them to fully realize their connection to their
              Hidden Body.
            </p>
            <p>
              After this inciting incident occurs, permanently increase all of your
              <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolism</Crosslink> scores by 1.
            </p>
          </Section>
          <Section header="Revising Traits">
            <p>
              After character creation your Traits might still be vague and general, everyone in your game is still
              getting to known your character. During gameplay if you have a trait you haven't used much, you can revise
              this trait to something more concrete. You can even do this during a Challenge so that your revised trait
              becomes relevant to the Challenge.
            </p>
            <p>
              You can only revise traits when it doesn't contradict things that have already been shown to be true about
              your character. A trait you have already used several times cannot be completely changed to something
              totally unrelated, while a trait you have never used perhaps could be if the new trait makes more sense
              for the character. You can also usually change a trait from something general to something more specific.
              The GM has the final decision on any trait revision.
            </p>
            <p>
              For example, if you were facing a challenge involving ropes and knots, your vague Trait "Athlete" would
              not help. However, you could revise this to the more specific Trait "Rock Climber", and suddenly it's
              quite relevant. Later, you couldn't revise "Rock Climber" into some other athletic pursuit, but perhaps
              you could change it to something even more specific like "Mountaineer", "Alpinist", or "Ice Climber".
            </p>
            <Section header="Lost Traits">
              <p>
                If a Trait represents an physical or social asset, it could potentially be lost during gameplay. The GM
                should not take Traits away for no reason, only when the character's actions destroy their asset
                irrevocably. If this occurs, replace the Trait representing the asset with one representing a useful
                lesson the character learned from the incident. For example, a character with a Trait representing an
                expensive vehicle may have this Trait replaced with "Careful Driver" if they crash it.
              </p>
            </Section>
          </Section>
          <Section header="Leveling Up">
            <p>
              After each session, the GM will give your character some experience points. These can be spent to gain
              Entanglements and special abilities. As you gain experience, your Hidden Metabolisms will grow rapidly to
              rival and then exceed your Physical Metabolisms as your abilities become more and more superhuman. Rather
              than choosing to specialize in one side or the other, instead your powers will grow as your two halves
              become more and more in sync. See chapter 5 for more details on how to use your experience points.
            </p>
          </Section>
        </Section>
      </Section>

      <Break />
      <Section header="Physical Origins">
        <p>
          Physical Origins represent your character's place in the world and will provide guidance for choosing your
          next <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>. Each will also increase one
          Physical Metabolism and one Action Bonus. Conventional is the most common origin, if your character lives a
          lifestyle that would seem somewhat normal in the present day then choose Conventional.
        </p>
        <Section header="Conventional" isInset>
          <p>
            The vast majority of people in the world fall into this category. You live a life that wouldn't be unusual
            in the present day. If you can afford them, you have access to modern conveniences and liberties that others
            are losing access to.
          </p>
          <ol>
            <li>
              <h5 className="subheader">How do you feel about this lifestyle?</h5>
              <strong>It suits me for now.</strong> Maybe you think a few things seem unfair, or maybe not, but you have
              a lifestyle you'd prefer not to lose, gain a Trait representing a career path, position of authority, or
              access to a useful social community.
              <br />
              <strong>I'm rebelling against it.</strong> While the world falls collapses, you can't stand idly by. You
              work to steer future into a better direction than it seems to be headed currently. Gain a Trait
              representing an membership in an activist or counterculture movement, or skills you use to organize and
              rally such a community.
              <br />
              <strong>I'm struggling.</strong> You are part of the rapidly growing global precariat, struggling or
              failing to make ends meet. Gain a Trait representing an a skill you use to support yourself despite
              adversity.
            </li>
            <li>
              <h5 className="subheader">You've avoided the worst aspects of the failing climate. How?</h5>
              <strong>I have money.</strong> The world really hasn't changed much if you can afford to live somewhere
              comfortable. Gain a Trait representing a significant financial asset or skills that got you into a well
              paid career.
              <br />
              <strong>I got lucky.</strong> Maybe your home region hasn't struggled much or maybe someone else gets you
              access to a better lifestyle. Gain a Trait representing useful knowledge of your home city or region, or a
              social benefactor that somehow allows you to live in a comfortable area.
              <br />
              <strong>I'm prepared.</strong> You saw this coming and you prepped for the worst case scenario. Gain a
              Trait representing access to a physical asset, such as a bunker, off grid power sources, or a stockpile
              that you can use if things go wrong.
            </li>
            <li>
              <h5 className="subheader">What's your vibe?</h5>
              <strong>Mainstream.</strong> Maybe you're fashionable or maybe you just don't think about this too much.
              Gain a Trait representing your ability to fit into a specific social circle or the dominant aspect of your
              appearance, demeanor or fashion.
              <br />
              <strong>Counterculture.</strong> Are you part of the Frontier movement? An slouch fashionista? A DIY
              ecopunk maker? Choose or invent a near-future subculture you belong to and Gain a Trait representing your
              ability to fit in with it.
              <br />
              <strong>Extremely online.</strong> You know all the memes and most of you social life is occurs on a
              screen. Gain a Trait representing a sizeable online following or community you have access to, or a field
              of trivia you've learned while online.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. This is the ability you find yourself leaning into most
              in life.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. In moments of fear, this is how you would spring into
              action.
            </li>
          </ol>
        </Section>
        <Section header="Conscript" isInset>
          <p>
            You are a veteran of the world's slow-burning collapse. As the changing climate drives the world towards
            more cold and hot wars over fuel, water, arable land, or petty squabbles, you've had a first hand experience
            with the conflicts many only see distantly in their news feeds. Whether you've been directly in a combat
            role, entangled in espionage, served as an officer, or been involved in organizing an armed resistance
            movement, you find it difficult to return to civilian life.
          </p>
          <ol>
            <li>
              <h5 className="subheader">Who did you serve under?</h5>
              <strong>A nation state's military.</strong>You had a role in a traditional military command structure.
              Gain a Trait representing an athletic, technical, or discipline based skill you built while filling or
              training for this role.
              <br />
              <strong>Private Security.</strong> You served as enforcement or muscle for an enterprise securing its
              resources, a rich family's secured enclave, or individual's bodyguard. Gain a Trait representing an
              athletic, observational, or investigative skill you used in this role, or a Trait representing access to a
              supply of small arms.
              <br />
              <strong>A regional warlord.</strong> Increasing instances of failing cities, conflicts over basic
              resources like water, and government coups have resulted in regions of martial law under de facto control
              of armed organizations, and you've been in the ranks of one. Gain a Trait representing an athletic or
              survival oriented skill or a Trait representing access to a piece of improvised military hardware.
              <br />
              <strong>A Social Movement.</strong> You fight for a cause you believe in against the forces of oppression,
              to protect your Frontier community from corporate land grabs, our sustain the stability of a community
              fallen to martial law. Gain a trait representing a skill you used in actively defending your cause or a
              skill you used in building and organizing it.
            </li>
            <li>
              <h5 className="subheader">What was your responsibility?</h5>
              <strong>Combat.</strong> You've seen active duty on the ground in combat. Gain a Trait representing a
              skill needed to survive in a warzone. Alternatively, due to your experience in actual combat, you can
              forego taking this trait and instead increase the Action Bonus for an action your practiced in combat from
              0 to 1.
              <br />
              <strong>Personnel.</strong> Whether you were an officer or led a unit in the field, your core duties
              involved managing people. Gain a Trait representing a skill used to lead others or navigate bureaucracy.
              <br />
              <strong>Hardware.</strong> You spent your time in the cockpit, at the remote control, in the garage, or in
              the factory. Gain a Trait representing skills needed to control, maintain, program, or build a type of
              military hardware.
              <br />
              <strong>Information.</strong> Whether you were in espionage, IT, hacking, or accounting, your
              responsibility was acquiring or securing information. Gain a Trait representing a social or technical
              skill you used in this pursuit, or a security clearance you have.
            </li>
            <li>
              <h5 className="subheader">Why can't you return to a conventional life?</h5>
              <strong>I've seen things.</strong> You've been scarred by atrocities, starving refugees, excessive
              violence, or being forced to contain something you weren't able to explain. Returning to an ordinary life
              seems unthinkable. Gain a Trait representing a skill you developed in the line of duty or as a coping
              strategy afterwards.
              <br />
              <strong>They have leverage.</strong> Every time you try to get out, they pull you back in. Your career,
              freedom, property, safety, or the safety of those close to you is threatened if you try to leave your
              position. Gain a Trait representing a skill you use to hide information from those with leverage over you.
              <br />
              <strong>I know too much.</strong> You saw the wrong thing, the true purpose of a liaison operation with
              the Schedule, the civilian casualty report that was buried, the biological agent your company tested.
              You're not a soldier, you're a loose end, and you know they'll tie you off if you try to leave. Gain a
              Trait representing a security clearance or other type of access you have, or a unusual specialist skill.
              <br />
              <strong>This is just what I'm good at.</strong> You excel at this, at finding the comforting clarity of a
              mission within the frightening chaos of action. Anything else feels like playing pretend. Gain a Trait
              representing a strong combat or tactically oriented skill.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. This is the ability you rely on when things get tough.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. This is the action you practiced the most in training or
              combat.
            </li>
          </ol>
        </Section>
        <Section header="Documented" isInset>
          <p>
            As a reactionary response to repeated disasters, many regions worldwide have enacted laws requiring RFID
            cards that can be scanned from several meters away and matched to a database of all previous scan locations.
            You live or work somewhere that this is enforced, or you recently used to, and therefore you have a valid
            RFID card.
          </p>
          <ol>
            <li>
              <h5 className="subheader">
                You live under extreme surveillance, your movements could be tracked. How do you feel about this?
              </h5>
              <strong>It's not so bad.</strong>The RFID system makes things more convenient for you, or at least not
              resisting it does. Gain a Trait representing a vocational or academic skill, position of authority, or
              access to a useful social community.
              <br />
              <strong>I help enforce it.</strong>You think the RFID system is necessary to keep everyone safe, and work
              to ensure compliance. Gain a Trait representing a skill learned in law enforcement, a type of
              jurisdictional power you have, or access to surveillance data.
              <br />
              <strong>I'm rebelling against.</strong> The RFID system has triggered a lot of protest, including yours.
              You work from within to subvert or undermine the system. Gain a Trait representing an membership in an
              underground hacker, maker, or activist community, skills you use to interfere with technical or social
              systems, or knowledge of blind spots, weaknesses, and loopholes in the system.
            </li>
            <li>
              <h5 className="subheader">Why did you end up getting registered with an RFID?</h5>
              <strong>My city started requiring them recently or I moved to a city that already did.</strong> Gain a
              trait representing your knowledge of your home city or useful social connections within it.
              <br />
              <strong>My career requires it.</strong> Gain a Trait representing a career in law enforcement, the
              military, politics, or a career that requires a deep background check.
              <br />
              <strong>It makes international travel easier.</strong> Gain a Trait representing a language or skills
              you've gained while or find useful while outside of your home region, or to fit in while frequently on the
              move.
              <br />
              <strong>My security clearance requires it.</strong> Gain a Trait representing a security clearance or
              other access to sensitive information.
            </li>
            <li>
              <h5 className="subheader">Has your lifestyle been impacted by climate events or political upheaval?</h5>
              <strong>Not really, I'm doing well.</strong> Gain a Trait representing success in a career, a social
              community, or access to resources.
              <br />
              <strong>Yes, avoiding it brought me to this RFID enforced region.</strong> Gain a Trait representing a
              skill or useful social connection you needed to cultivate in order to start a new life.
              <br />
              <strong>Yes, even some large RFID cities are starting to struggle.</strong> Gain a Trait representing a
              skill or physical asset you've needed to cultivate to deal with failures in infrastructure or supply
              chains.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. This is the ability you've found most useful in your
              life.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. This is the action your would instinctively rely on in a
              dangerous moment. Alternatively, going with the flow in your life may have protected you from needing to
              develop these reflexes, if this is the case instead forego this Action Bonus and instead take any Trait of
              your choosing.
            </li>
          </ol>
        </Section>
        <Section header="Elite" isInset>
          <p>
            Life has been kind to you. Whether due to pure luck, nepotism, hard work, or the scales of inequality simply
            working in your favor, you've lived a life of privilege. You have no problem moving in and out of areas that
            require RFID documentation. You are confident your privilege will keep insulated from the worst of the
            global upheaval you've heard about in the news, even if things get significantly worse. However you have the
            sensation of living in a gilded cage and an increasingly apparent target on your back.
          </p>
          <ol>
            <li>
              <h5 className="subheader">What is the nature of your privilege?</h5>
              <strong>Resources.</strong>Maybe you were born into an old money dynasty, built a thriving business,
              invested in the right thing, or you profited from a global conflict. Choose a Trait representing the
              useful physical asset or liquid financial reserves you gained from this.
              <br />
              <strong>Connections.</strong> You know the right people, have contacts in high places, or have a seat on
              the board. Gain a Trait representing a powerful person, group, institution, or political entity you can
              contact when you need something, or a Trait representing a social skill you use in high society.
              <br />
              <strong>Influence.</strong> You are have traditional fame, an online following, diplomatic sway, or
              political power. Gain a Trait representing a group of people you have influence over or an organization
              you have authority within, or a Trait representing skills you use be influential in any situation.
              <br />
              <strong>Enclave.</strong> A growing trend among the super wealthy, enclaves are secured invite-only
              private luxury communities isolated and fortified from climate disasters and supply chain disruptions. You
              are fortunate enough to have access to one. Gain a Trait representing a property you have access to within
              an enclave.
              <br />
              <strong>Access.</strong> Knowledge is power, and you have access to information that most people don't.
              Maybe it's a secret security clearance, insider market information, or you just know something you
              shouldn't. Gain a Trait representing a kind of access to hidden information that most people don't have,
              or a piece of knowledge you already have that is typically off limits to others.
            </li>
            <li>
              <h5 className="subheader">What price do you pay for this privilege?</h5>
              <strong>Dynastic obligations.</strong> Your family's or your company's and expectations are a cage of
              gilded bars. You must maintain a certain reputation and submit to their whims. Gain a Trait representing
              your close ties to your influential family or a powerful organization
              <br />
              <strong>Public outcry.</strong> You are a polarizing figure and your reputation precedes you. When some
              people hear your name they blame you, accurately or not, for the world's problems. Gain a Trait
              representing your public relations contacts working to fix this problem, or the following you have of
              people who disagree with your detractors.
              <br />
              <strong>Legal scrutiny.</strong> Perhaps your resources were gained illicitly, or perhaps they have drawn
              the attention of financial auditors. Or worse yet, perhaps you have drawn the attention of the Schedule
              and one of its Auditors. Whatever the circumstance, you actions are being scrutinized, and perhaps even
              under direct surveillance. Gain a Trait representing contacts that help you get away with white collar
              crimes or a skill that helps you avoid unwanted attention.
              <br />
              <strong>Crippling dependence.</strong> You are dependent on the luxuries of your station, perhaps party
              drugs, your entourage, designer nootropics, bespoke medical care, or simply constant validation. Without
              this bubble, you fear you'd fall apart in days. Gain a Trait representing contacts that can get you access
              to substances regardless of legality or rarity, or a clique of yes-men who support even your worst ideas.
              <br />
              <strong>Being a target.</strong> You have powerful rivals, or a ladder of people you've trampled on your
              way up, or people view you as a high value target for political violence. Your safety is only maintained
              seclusion or expensive security. Gain a Trait representing your private security team or a secured
              property.
            </li>
            <li>
              <h5 className="subheader">How do relate to the mainstream society you are isolated from?</h5>
              <strong>I don't.</strong> Your world is the only one that matters. You've fully embraced the oligarchy and
              my position in it. Everyone you engage with is is either another elite or on your payroll. Gain a Trait
              representing a powerful social contact, a skill you use to engage with high society, or hired help such as
              an assistant, bodyguard, driver, or public relations team.
              <br />
              <strong>It's a resource.</strong> You see the struggling masses as a pool of labor, consumers, or a
              problem to be managed. Your interactions are transactional. Gain a Trait representing an ability that
              helps you do the cold calculus needed to benefit off of others.
              <br />
              <strong>I have a social life.</strong> Maybe you are frequently spotted on the red carpet, are always
              invited to high class galas, like to indulge in controlled substances at night clubs, or you are just
              highly engaged online. Whatever the case, you know what's happening and are often a part of it. Gain a
              Trait representing your social status or a skill you use to maintain that status.
              <br />
              <strong>I have hobbies.</strong> You have the time or means to engage in a hobby in a way that most don't,
              or the ability to pursue a hobby at a professional level. Gain a Trait representing an athletic or
              artistic skill that you hone in the pursuit of this activity.
              <br />
              <strong>I give back.</strong> Through philanthropy, politics, or volunteering, you try to make the world a
              better place, or you at least try to appear as through you do. Gain a Trait representing contacts or
              skills you made working at this goal.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. This is the ability you've felt is your greatest
              strength.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. Your life may not have had many chaotic or stressful
              moments, but when it does your instinct is to lean into this action. Alternatively, your sheltered life
              may have protected you from needing to develop these reflexes, if this is the case instead forego this
              Action Bonus and instead take any Trait of your choosing.
            </li>
          </ol>
        </Section>
        <Section header="Frontier" isInset>
          <p>
            In one way or another, you've abandoned traditional society. Maybe you've joined an off-grid community in
            the Post-National Frontier movement, or maybe you've just struck out on your own. Cheap DIY solar and water
            condenser projects can sometimes make this possible on small scales. You've destroyed your RFID if you ever
            had one.
          </p>
          <ol>
            <li>
              <h5 className="subheader">How do you feel about the Frontier lifestyle?</h5>
              <strong>I walk the walk and talk the talk.</strong> You live like this because it's important to your
              values. Gain a Trait representing the role you fill in your community.
              <br />
              <strong>I wouldn't have chosen it, but it's where I am for now.</strong> Circumstances led you here, but
              you'd rather be doing something else. Gain a Trait representing a role you are better suited to fill than
              the one you find your self filling in your community.
            </li>
            <li>
              <h5 className="subheader">How do you support yourself or your community?</h5>
              <strong>I work to fulfill physical needs.</strong> Gain a Trait representing a skill that you use to help
              provide food, water, power, data, or some other necessity. This may involve producing it directly or
              siphoning it off from some other source.
              <br />
              <strong>I work protect the community.</strong> Gain a Trait representing a skill that you use to defend
              the community from danger or coercion.
              <br />
              <strong>I support community members directly.</strong> Gain a Trait representing a soft skill you use to
              keep the community together and running smoothly.
            </li>
            <li>
              <h5 className="subheader">How well do you fit in with the culture and politics of your community?</h5>
              <strong>I'm a respected member of this community.</strong> Gain a Trait describing your ability to fit in
              with the dominant subculture in your community.
              <br />
              <strong>I'm doing my own thing.</strong> Gain a Trait describing the strongest aspect of your appearance,
              demeanor or fashion.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. This ability has proven necessary to support yourself.
            </li>
          </ol>
        </Section>
        <Section header="Fugitive" isInset>
          <p>
            You are on the run from something. It may be from the law, a stalker, organized crime, an Auditor from the
            Schedule, a person in power, or some other threat. Regardless of the source of the threat, you no longer
            have access to a conventional lifestyle. You must either live in hiding, constantly on the move, or under
            false identities. This is easier in some places, but very difficult in places with RFID laws.
          </p>
          <ol>
            <li>
              <h5 className="subheader">What are you running from?</h5>
              <strong>Law Enforcement or some other official process.</strong> Regardless of whether you are guilty or
              wrongly accused, you can't afford to be caught. Gain a Trait representing a skill or social connection you
              use avoid the heat.
              <br />
              <strong>An individual or an underground organization.</strong>Gain a Trait representing an underworld
              connection or a skill you use to know when you are being followed or keep your home and loved ones
              concealed.
              <br />
              <strong>The Schedule.</strong> Somehow you have been flagged as a "Schedule 6 Self-Aware Anomalous
              Entity", or a person of interest in the investigation of a supernatural anomaly. An Auditor working for
              the Schedule is hunting you. Gain a Trait representing something you know about that normal people
              shouldn't or a skill you use to stay hidden from someone with access to mass surveillance over video or
              online activities.
            </li>
            <li>
              <h5 className="subheader">How do you avoid your pursuers?</h5>
              <strong>I lay low.</strong> Gain a Trait representing a skill you use to stay hidden or an asset, such as
              a safe house, you can use to live without being noticed.
              <br />
              <strong>I keep moving.</strong> Gain a Trait representing a skill you use to repeatedly reinvent your life
              every time you move or a material asset you can use to support staying on the move.
              <br />
              <strong>I have a new identity.</strong> Gain a Trait representing a skill you use create a new identity or
              a material asset, such as a fake or stolen RFID, you can use to become someone else.
            </li>
            <li>
              <h5 className="subheader">How do you make ends meet?</h5>
              <strong>I get paid under the table.</strong> You work a more conventional job but have arranged to be paid
              off the books. Gain a Trait representing a skill needed to work this job or the social connections you
              needed to leverage to arrange it.
              <br />
              <strong>Illicit activity.</strong> Whatever this activity, it pays the bills as long as you don't get
              caught. Gain a Trait representing the role you play in this racket, a skill you need to do it, or
              connections you have that make it possible.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. This is the ability has proven necessary to support
              yourself.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. This is an action you either practiced during criminal
              activities or when you needed to escape from something.
            </li>
          </ol>
        </Section>
        <Section header="Liberated" isInset>
          <p>
            "Liberated" is a euphemism the frontier movement uses to refer to regions that have been abandoned by their
            parent nations and left to martial law, most often due to unmanageable climate disasters. Most people leave
            these regions and become refugees or migrants, but some continue their lives there fending for themselves
            under martial law.
          </p>
          <ol>
            <li>
              <h5 className="subheader">What happened that separated your home region from society?</h5>
              <strong>A disaster or a failure of a local resource or supply chain.</strong> Whether it was natural or
              man-made, sudden destruction or a slow collapse, this event has made this region challenging to live in.
              Gain a Trait representing a skill you depend on to stay resourceful amidst the remains of this region.
              <br />
              <strong>Political upheaval, conflict, or war.</strong> Maybe your region is an active combat zone or maybe
              it's isolated by a blockade, siege or quarantine. Whatever the case, the area is under martial law. Gain a
              Trait you use to survive and avoid the worst of the danger.
            </li>
            <li>
              <h5 className="subheader">What's your place in this situation?</h5>
              <strong>I'm actually rather comfortable.</strong> Gain a Trait representing a connection you have to a
              local warlord or the external state that keeps you living reasonably comfortably.
              <br />
              <strong>I'm struggling to make the most of what I have.</strong> Gain a Trait representing a skill or
              community you depend on to survive without fully functional supply chains and infrastructure.
              <br />
              <strong>I'm a refugee trying to escape this situation.</strong> Gain a Trait representing a skill or
              social connection you use while attempting to escape or build a new life somewhere else.
            </li>
            <li>
              <h5 className="subheader">How long has it been since you've been able to lead a conventional life?</h5>
              <strong>Years.</strong> Gain a Trait representing a skill or community you depend on to survive without
              fully functional supply chains and infrastructure.
              <br />
              <strong>Just a short time.</strong> Gain a Trait representing a role you filled in a career or social
              circle before your region fell apart.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. You depend on this ability to support yourself and
              avoid adversity.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. This is an action you rely on when pushed into conflict.
            </li>
          </ol>
        </Section>
        <Section header="Unknown" isInset>
          <p>
            You don't remember your origin. For reasons unknown to you, before a certain point in time you have no
            memories. Whether this point is a few days ago or a few years ago, you've been struggling to find an
            identity for yourself ever since.
          </p>
          <ol>
            <li>
              Gain three instances of a <Crosslink target={linkMap.AdvantageAndDisadvantage}>Trait</Crosslink> called
              Unknown Skill. You don't realize you have these skills and you do not recall practicing them. Later, when
              you attempt a Challenge, you can permanently replace one of these
              <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> with a skill relevant to this
              Challenge and describe a flash of recall you experience of a suppressed memory that explains why you have
              this Trait.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. Regardless of where it came from in your past, you feel
              confident in this ability.
            </li>
            <li>
              You have an unknown Action Bonus. Once, at any moment during the first time you are involved in combat,
              you may increase an Action Bonus from 0 to 1. Something about this action just clicks for you, as if
              you've practiced it before but have no memory of it.
            </li>
          </ol>
        </Section>
      </Section>
      <Break page />
      <Section header="Hidden Origins">
        <p>
          A Hidden Origin represents how your character first came to sense their connection to their Hidden Body. This
          can happen simply from this connection being strong and learning or training to understand it intuitively,
          however, more often it comes from enduring some sort of dissociative experience. Dissociation occurs when the
          normal constant information transfer between the physical brain and the hidden body is disrupted in some way.
          The algorithm of consciousness in humans depends on this connection, and any disruption leads to psychedelic
          mental side effects, and ultimately memory loss and unconsciousness in the most extreme cases. Rarely, when
          exposed to dissociative conditions some people began to sense the disruption in their connection to hidden
          space, and therefore become aware of the connection itself and develop an intuitive sense of how to control
          it.
        </p>
        <h5 className="subheader">Hidden Origins and Personal Identity</h5>
        <p>
          The journey to sensing your Subtle Body is deeply personal. For some characters, this awakening can resonate
          with real-world experiences of neurodiversity, gender dysphoria, or mental health challenges. Some of the
          Hidden Origins, particularly the ones arising from dissociation, provide a way to explore these themes through
          a supernatural lens, if you choose.
        </p>
        <p>
          Hidden Origins are rare and always supernatural in character. They are not the cause or a result of
          neurodiversity, but in your character's experience they may have been intertwined. Your character's awakening
          to the supernatural could have been a source of trauma or a source or strength, a epiphany of profound clarity
          or a long journey of self-discovery, or simply a strange new fact of their life.
        </p>
        <p>
          However you choose to frame your character's origin, these experiences weren't a weakness, they were the
          crucible that forged a connection to something greater.
        </p>

        <Section header="Awakened" isClassified>
          <p>
            <strong>You followed your own path to understanding a hidden truth that others don't.</strong> Whether you
            came to this conclusion intuitively, from readings on the dark web or in ancient texts, you understand the
            true nature behind the workings of the universe. This understanding is so fundamental that holding it has
            made aware of the seemingly supernatural things you may be capable of.
          </p>
          <ol>
            <li>
              <h5 className="subheader">What is your understanding of the fundamental nature of universe?</h5>
              <strong>Empirical theory.</strong> The the universe is fundamentally knowable. Your abilities are
              predicted by Orthodynamic Field Theory, or a some other conceptual framework, and they cloud be
              experimentally verified if you could get the right tools. Gain either the Specialization{" "}
              <SpecializationLink name="Analyze Cascade" /> or <SpecializationLink name="Embed Function" />.
              <br />
              <strong>Universal algorithm.</strong> The universe is fundamentally software. Regardless of whether this
              quantization happens naturally or as part of a simulation, it has underlying rules you can learn to hack
              or manipulate. Gain either the Specialization <SpecializationLink name="Blink" /> or{" "}
              <SpecializationLink name="Isolation Field" />
              , an ability you use to slip through the gaps in the finite resolution and frame rate of the universe.
              <br />
              <strong>Consensus praxis.</strong> The universe is created by the beliefs of its inhabitants. The
              aggregate ontological consensus of all sentient beings doesn't arise from natural law, it creates it. If
              you could shape the beliefs of others on a significant scale, you could shape reality. Gain either the
              Specialization <SpecializationLink name="Illusion" /> or <SpecializationLink name="Psychosomatism" />, an
              ability you use to make the unreal seem real.
              <br />
              <strong>Paracosmic flow.</strong> A new universe is created for each possible result of a random event.
              All possible universes are equally true, but separated into unique worldlines. You think you can learn to
              alter reality by slipping between worldlines into one where what you desire is true. Gain either the
              Specialization <SpecializationLink name="Control Probability" /> or{" "}
              <SpecializationLink name="Sublime Combat" />, an ability you gain from slipping into worldlines where what
              you want is true.
            </li>
            <li>
              <h5 className="subheader">How did you come to understand this?</h5>
              <strong>A sudden epiphany.</strong> It came to you all at once. Gain a trait representing an insightful or
              perceptive skill or personality trait. <br />
              <strong>Extensive research or practice.</strong> You pursued the truth with time and effort. Gain a Trait
              representing a field of academic knowledge, a spiritual practice, or disciplined physical practice.
              <br />
              <strong>I had a role model.</strong> You followed the footsteps of someone to the truth. Gain a Trait
              representing contact with a mentor with useful skills or access, or subjects you learned from them.
              <br />
            </li>
            <li>
              <h5 className="subheader">How has this understanding changed your place in the world? </h5>
              <strong>Nihilism.</strong> What's the point of following the world's norms? Gain a Trait representing a
              skill you developed while following your own unusual path.
              <br />
              <strong>Empathy.</strong> You feel more connected with everyone than ever. Gain a Trait representing a
              social or insight based skill.
              <br />
              <strong>Isolation.</strong> You are more concerned with following the rabbit holes of your belief system
              to their conclusions than relating to others. Gain a Trait representing an obscure field of study.
              <br />
              <strong>I went public.</strong> Whether it's a hastily photocopied manifesto, an academic paper, a series
              of social media posts, the lyrics to your music, or a highly produced video, your thoughts about the
              workings of the universe are publicly available. Gain a Trait representing a skill used in the production
              of this media, or followers it has garnered for you.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. These abilities developed
              further during your awakening.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. You practiced or were forced to use this action during
              your awakening.
            </li>
          </ol>
        </Section>
        <Section header="Competence" isClassified>
          <p>
            <strong>Things always seemed to come easily for you.</strong> Somehow, at a young age, you started to
            subconsciously access to a small portion of the
            <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolisms</Crosslink>, giving you more resources to
            succeed at anything you attempted. Perhaps you've always wondered why other people had to put so much effort
            into learning new skills when it seemed so easy for you.
          </p>
          <ol>
            <li>
              <h5 className="subheader">In your youth, what were you?</h5>
              <strong>A focused prodigy.</strong> You could hyperfocus on topics, ensuring you mastered them. Gain
              either the Specialization <SpecializationLink name="Determination" /> or{" "}
              <SpecializationLink name="Investigation" />.
              <br />
              <strong>A prolific dabbler.</strong> You tried everything once and learned to split your focus between
              many things. Gain either the Specialization <SpecializationLink name="Multitask" /> or{" "}
              <SpecializationLink name="Tactical Awareness" />.
              <br />
              <strong>A mimic.</strong> You could do anything anyone else could, sometimes better. Gain either the
              Specialization <SpecializationLink name="Episemiotics" /> or <SpecializationLink name="Mimic" />.
              <br />
              <strong>Precocious social awareness.</strong> Predicting the motives and thoughts of others came easily
              for you. Gain either the Specialization <SpecializationLink name="Cold Reading" /> or{" "}
              <SpecializationLink name="ReadMind" />.
            </li>
            <li>
              <h5 className="subheader">Were your talents...</h5>
              <strong>Physical.</strong> Gain a Trait representing a type of physical fitness or athletic competition
              you excel in. <br />
              <strong>Academic.</strong> Gain a Trait representing a field of knowledge you know inside and out.
              <br />
              <strong>Social.</strong> Gain a Trait representing a social skill you're surprised other's don't have or a
              useful social community.
              <br />
            </li>
            <li>
              <h5 className="subheader">How did this affect you socially?</h5>
              <strong>You stayed humble.</strong> Gain a Trait representing useful social contact, community, or
              network. These people have your back. <br />
              <strong>You knew you were special.</strong> Choose a skill or field of study that came naturally to you
              and gain a Trait representing it.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. You were always talented in
              these domains.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. You have a raw talent with this action, even if you
              haven't practiced it.
            </li>
          </ol>
        </Section>
        <Section header="Contact" isClassified>
          <p>
            <strong>You've had an encounter with a supernatural entity.</strong> Something from beyond the veil of
            ordinary reality reached out, and you were the one it touched. This encounter, whether terrifying,
            enlightening, or ambiguous, shattered your old worldview and left you with a permanent connection to the
            unnatural. You didn't just learn a secret, you met its keeper.
          </p>
          <ol>
            <li>
              <h5 className="subheader">What did you come in contact with??</h5>
              <strong>A human with supernatural abilities.</strong> You had close contact with a seemingly normal person
              who could do something seemingly impossible. This reframed your own conception of what was possible for
              you. Gain a Trait representing your ongoing social contact with this person or investigative skills you
              used to attempt to find them again or understand how they did what they did.
              <br />
              <strong>Something that only looks human.</strong> Only you know the truth that it is only mimicking or
              hijacking a human body or bodies. Gain a trait representing skill that helps you know when things aren't
              as they seem.
              <br />
              <strong>Something truly alien.</strong> You aren't sure what you saw, but it definitely wasn't of this
              earth. Gain a Trait representing a useful reaction you have in response to horror of the unknown, or an
              obscure field of study you pursued to understand what you saw.
              <br />
              <strong>An incorporeal being.</strong> Maybe it was a human who's mind somehow outlived their physical
              body or transcended it intentionally, or maybe it's something else entirely. Whatever it is, it has
              limited ways of interacting with physical space other than talking to you. Gain a Trait representing a
              sense sharper than normal you use to communicate with this entity, or representing continued contact with
              the entity itself.
              <br />
              <strong>You don't know.</strong> It only communicates with you via human proxies, bureaucracy, dead drops,
              online, or or other indirect means. Regardless, you are convinced it must be supernatural in origin. Gain
              a Trait representing skill with a type of communication technology or a way to find signals in the noise
              of everyday life.
            </li>
            <li>
              <h5 className="subheader">What insight did it leave you with?</h5>
              <strong>The world is haunted.</strong> It abounds with intangible disembodied minds. Whether you view them
              as spirits of ancestors, theological angels and demons, or Clauda-Yau post-corporeal hidden body entities,
              they speak to you if you know how to listen. In order to interact with these entities, gain either the
              Specialization <SpecializationLink name="Commune" /> or <SpecializationLink name="Familiar" />
              .
              <br />
              <strong>Everything is alive.</strong> The entity communicated not with words, but by opening your mind to
              the consciousness of everything around you. Panpsychic awareness is a fundamental feature of reality,
              every object contains some measure of it. Gain either the Specialization{" "}
              <SpecializationLink name="Sense Minds" /> or <SpecializationLink name="Detect Sensorium" />
              .
              <br />
              <strong>Rituals are key.</strong> You summoned the entity via a ritual or it taught you that ritual imbues
              any practice with meaning and power. Your abilities stem from these rituals whether you create them on the
              fly, perfected them on your own, or adopted them from ancient or contemporary cultures. A ritual you
              practice has granted you either the Specialization <SpecializationLink name="Clairvoyance" /> or{" "}
              <SpecializationLink name="Subtle Ward" />.
              <br />
              <strong>We're not alone.</strong> The universe contains unknowable multitudes within its unfathomable
              expanse. You and the entire world you experience are but one tiny element in it. If you instinctively
              protect your mind from alien influence, gain the Specialization <SpecializationLink name="Insulation" />
              or if you let it in and found a way to communicate gain <SpecializationLink name="Group Mind" />.
            </li>
            <li>
              <h5 className="subheader">How did you encounter this entity?</h5>
              <strong>I sought it out..</strong> Gain a Trait representing skills you used to investigate and find this
              entity or a practice that forced it to come to you.
              <br />
              <strong>It sought me out for a reason.</strong> Gain a Trait representing a position of authority or other
              privileges that the entity wanted access to through you.
              <br />
              <strong>A coincidence.</strong> Gain a Trait representing a everyday skill helpful for leading normal
              life.
              <br />
              <strong>It has always been with you.</strong> Gain a Trait representing a skill it taught you over time
              that you wouldn't have learned on your own.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. You were always talented in
              these domains.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. You have a raw talent with this action, even if you
              haven't practiced it.
            </li>
          </ol>
        </Section>
        <Section header="Created" isClassified>
          <p>
            <strong>Your potential was unlocked from the outside.</strong> You are a product of a process, a regimen, an
            experiment, or an ordeal, that forcibly bridged the gap between your Physical and Hidden Bodies. Whether you
            sought out this transformation or were subjected to it against your will, you emerged fundamentally altered,
            your capabilities permanently expanded by forces beyond your own understanding.
          </p>
          <ol>
            <li>
              <h5 className="subheader">Who did this to you?</h5>
              <strong>An individual adversary.</strong> Someone forced you into this process in an attempt to harm you
              or simply assert dominance. Gain a Trait representing skills you developed to compete with a rival or
              extract revenge from a nemesis.
              <br />
              <strong>An individual ally.</strong> Someone guided you down this path or followed it with you. Gain a
              Trait representing a contact you have with a mentor or peer that has supernatural awareness similar or
              superior to yours.
              <br />
              <strong>An esoteric institution.</strong> A small number of obscure and selective institutions claiming to
              be schools for gifted youth or paths to enlightenment exist. Most are scams or cults. However, the one you
              joined actually unlocked your true potential. Gain a Trait representing a field of academic or spiritual
              knowledge you studied, a martial discipline you practiced, or ongoing contact with a leader or peer from
              this institution.
              <br />
              <strong>It's classified.</strong> Whether you know the nature of the organization that that awakened your
              potential or not, the rest of the world definitely doesn't. It could be a research arm of The Schedule, a
              top secret branch of a nation state's intelligence agency, or a secret criminal organization operating in
              the shadows. Gain a Trait representing knowledge you gained in this time that is normally forbidden.
            </li>
            <li>
              <h5 className="subheader">What was the nature of this process?</h5>
              <strong>An intensive personal regimen.</strong> You had to devote all of your energy to following this
              path, whether you wanted to or not. Now, it's finally starting to feel like you're on the verge of
              transcending your limits. Gain a Trait representing a skill requiring intensive focus, discipline, and
              practice. <br />
              <strong>An esoteric curriculum.</strong> A few institutions focused on developing those with supernatural
              potential operate in hidden corners of the world. Maybe most are grifters or cults, but yours put you on a
              path to that is beginning to feel truly supernatural. Gain a Trait representing an arcane or spiritual
              field of study, or a useful contact at this institution.
              <br />
              <strong>Experimentation.</strong> Drugs, implants, intentional exposure to dilated spatial conditions, or
              time in the ganzfeld chamber left you truly transformed. You're only just beginning to understand what
              you're capable of afterwards. Gain a Trait representing a useful way your body or senses work differently
              than they did before.
              <br />
            </li>
            <li>
              <h5 className="subheader">What did this process leave you with?</h5>
              <strong>New hardware.</strong> Your body was changed permanently. Maybe this is a biological
              transformation, a modified genome, or an implanted device. Gain either the Specialization{" "}
              <SpecializationLink name="Explosive Strength" /> or <SpecializationLink name="Speed" />
              .<br />
              <strong>A crisis paradigm.</strong> You were taught that all phenomena arise from nature seeking balance.
              You've learned to intuitively sense that balance, and have the potential to create metastable imbalances,
              from which you can release tension to create energy. Gain either the Specialization{" "}
              <SpecializationLink name="Reverberation" /> or <SpecializationLink name="Stabilize" />
              .
              <br />
              <strong>A martial focus.</strong> Only through discipline, meditation, and intensive physical training can
              you understand the true limits of your mind and body. Only then can you overcome them. Gain either the
              Specialization <SpecializationLink name="Unarmed Mastery" /> or <SpecializationLink name="Counter" />
              .
              <br />
              <strong>A sense of euphoric unity.</strong> Everything is connected, the entire universe is a single
              natural system. Whether you believe in the universal wave function or that the planet is a living
              organism, you are starting to sense the flows of energy or information through the system. Gain either the
              Specialization <SpecializationLink name="Habituate" /> or <SpecializationLink name="Regeneration" />
              .
              <br />
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. Your transformation improved
              these abilities.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. After the process, you found yourself leaning towards this
              action when you encountered danger.
            </li>
          </ol>
        </Section>
        <Section header="Dissociated Self" topicKey="dissociatedSelfOrigin" isClassified>
          <p>
            <strong>You always felt like something was wrong about your body.</strong> Maybe you saw yourself with a
            different gender or appearance; maybe it felt like you were a mind awkwardly piloting a body; maybe you
            wished you could ignore the incessant repeated material demands that having a human body places on you.
            Whatever the manifestation, you experienced a chronic dissociation of the Self Metabolism, making your
            physical body feel like a separate, possibly even antagonistic, entity. This experience led directly to you
            developing a true understanding of the separation and connections between your Physical and Hidden Bodies.
          </p>
          <ol>
            <li>
              <h5 className="subheader">Before this experience peaked, how much did it affect you?</h5>
              <strong>Things were mostly normal.</strong>Gain a Trait representing a skill or social connection you
              gained during a more conventional part your youth.
              <br />
              <strong>You've always felt this way.</strong>Gain a Trait representing a skill or knowledge you gained in
              your youth that was considered outside of the stereotypes for someone who looked like you.
            </li>
            <li>
              <h5 className="subheader">How did you cope with the most challenging aspects of this experience?</h5>
              <strong>You turned inward.</strong> Gain a trait representing a creative skill or an uncommon field of
              knowledge you cultivated during this time.
              <br />
              <strong>You found community.</strong> Gain a trait representing a contact, social group, or online
              community that supported you during difficult times.
            </li>
            <li>
              <h5 className="subheader">How did this separation from your body shape you?</h5>
              <strong>You eventually learned to embrace what your body can do for you.</strong> You stay active, you got
              fit, you have hobbies that keep you moving. Gain either the Specialization{" "}
              <SpecializationLink name="Lifting Capacity" /> or <SpecializationLink name="Stamina" />
              .
              <br />
              <strong>You felt a need to transform physically.</strong> Eventually you found a way to become your true
              self or transcend the limits of your body. Gain either the Specialization{" "}
              <SpecializationLink name="Extropy" /> or <SpecializationLink name="Shapeshift" />
              .
              <br />
              <strong>You wanted to separate from reality entirely.</strong> You found abilities that lessen the burden
              embodiment places on your mind. Gain either the Specialization{" "}
              <SpecializationLink name="Deep Traversal" /> or <SpecializationLink name="Fade" />
              .
              <br />
              <strong>You feel like you're mind has split.</strong> However, two minds have their advantages. Gain
              either the Specialization <SpecializationLink name="Ambidexterity" /> or{" "}
              <SpecializationLink name="Multitask" />.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. These domains just seemed to
              click for you after this experience.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. You body seems to do this action almost automatically,
              even if you haven't practiced it.
            </li>
          </ol>
        </Section>
        <Section header="Dissociated Near" topicKey="dissociatedNearOrigin" isClassified>
          <p>
            <strong>You always felt like the was something off about the world around you.</strong> Maybe it all seems
            like a dream, an illusion, simulation, or some other crude imitation; maybe you felt constrained by the
            limits it imposed on you; maybe it all just feels meaningless. Whatever the manifestation, you experienced a
            chronic dissociation of the Near Metabolism, making the physical world feel unreal, unimportant, or
            untrustworthy. However, this experience led to your gaining an intuition into the hidden space behind all
            physical spaces.
          </p>
          <ol>
            <li>
              <h5 className="subheader">Before this experience peaked, how much did it affect you?</h5>
              <strong>Things mostly seemed normal.</strong> Gain a Trait representing a skill or social connection you
              gained during a more conventional part your youth.
              <br />
              <strong>It was always a bit like that.</strong> Gain a Trait representing a field of knowledge you
              developed searching for answers to why others didn't seem to notice something that seemed unavoidable to
              you.
            </li>
            <li>
              <h5 className="subheader">During this experience, how did you cope?</h5>
              <strong>You sought a medical diagnosis or explanation for why your experience was different.</strong> Gain
              a skill representing knowledge of a field of conventional or alternative medicine, a spiritual practice,
              or an awareness of your true nature that is useful in everyday life.
              <br />
              <strong>You sought a theory explaining why the world actually was this way.</strong> Gain a Trait
              representing a field of obscure and unusual knowledge or a social connection or community that shares a
              specific outlook on the world with you.
            </li>
            <li>
              <h5 className="subheader">How has a separation from the physical world changed you?</h5>
              <strong>You tried to shut out the outside world even further.</strong> Gain either the Specialization{" "}
              <SpecializationLink name="Darkness" /> or <SpecializationLink name="Silence" />.
              <br />
              <strong>You saw the world around you as a playground.</strong> Gain either the Specialization{" "}
              <SpecializationLink name="Speed" /> or <SpecializationLink name="Traversal" />.
              <br />
              <strong>You wanted to break the rules of the physical world.</strong> Gain either the Specialization{" "}
              <SpecializationLink name="Remote Interaction" /> or <SpecializationLink name="Reshape" />.
              <br />
              <strong>You honed your senses to take it in more clearly.</strong> Gain either the Specialization{" "}
              <SpecializationLink name="Exoproprioception" /> or <SpecializationLink name="Sharp Senses" />.
              <br />
              <strong>You wanted to reshape the world as you saw fit.</strong> Gain either the Specialization{" "}
              <SpecializationLink name="Composite" /> or <SpecializationLink name="Amplify Waveform" />.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism increase them both by 1. These abilities seemed more natural
              to you after this experience.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. In attempting to overcome your challenges, this ability
              developed quickly.
            </li>
          </ol>
        </Section>
        <Section header="Dissociated Far" topicKey="dissociatedFarOrigin" isClassified>
          <p>
            <strong>You always struggled to relate to other people.</strong> Maybe they always reacted differently than
            you expected; maybe you couldn't understand socializing seemed to be natural to others; maybe it was
            exhausting to be around other people; maybe other people seemed unnatural to you; or maybe you just felt
            awkward. Whatever the manifestation, you experienced a chronic dissociation of the Far Metabolism, making
            the other people seem inscrutable or illusory. However, this experience led to sensing more concretely the
            precise bounds of your Hidden Body, and therefore how to interact with it.
          </p>
          <ol>
            <li>
              <h5 className="subheader">Before this experience peaked, how much did it affect you?</h5>
              <strong>Things mostly seemed normal.</strong> Gain a Trait representing a skill or social connection you
              gained before your dissociative experiences.
              <br />
              <strong>It was always a bit like that.</strong> Gain a Trait representing a skill or field of knowledge
              that was important to you in your youth.
            </li>
            <li>
              <h5 className="subheader">During this experience, how did you cope?</h5>
              <strong>You learned to mask.</strong> Gain a Trait representing a social skill or connection you've
              cultivated despite the challenges.
              <br />
              <strong>You pursued other things.</strong> Gain a Trait representing a field of knowledge or creative
              process you invested yourself in instead.
            </li>
            <li>
              <h5 className="subheader">How has the sensation of isolation shaped you?</h5>
              <strong>You tried to protect yourself.</strong> You've learned to feel how others perceive you or when
              they mean you harm. Gain either the Specialization <SpecializationLink name="Danger Sense" /> or{" "}
              <SpecializationLink name="Detect Sensorium" />.
              <br />
              <strong>You overcame it.</strong> You learned to understand where others are coming from and how to
              interact with them
              <SpecializationLink name="Charm Person" /> or <SpecializationLink name="Cold Reading" />.
              <br />
              <strong>You lashed out at others.</strong> Gain either the Specialization{" "}
              <SpecializationLink name="Disentangle" /> or <SpecializationLink name="Rage" />.
              <br />
              <strong>You taught yourself empathy.</strong> You can practically feel the minds around you. Gain either
              the Specialization <SpecializationLink name="Read Mind" /> or <SpecializationLink name="Sense Minds" />.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. Your experience helped you
              develop these abilities.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. In attempting to overcome your challenges, this ability
              developed quickly.
            </li>
          </ol>
        </Section>
        <Section header="Missing Time" isClassified>
          <p>
            <strong>You experienced a period of missing time that you do not remember.</strong> Perhaps intense
            dissociation, an abduction, or drugs rendered you unable to remember this time, or perhaps something even
            stranger occurred. Whatever happened, afterwards you had a subtle awareness of the Hidden Body and a drive
            to find answers about the nature of this experience.
          </p>
          <ol>
            <li>
              <h5 className="subheader">How long was this lost period?</h5>
              <strong>Hours or days.</strong> You weren't gone long, but you came back different. Gain a Trait
              representing a skill you didn't have before, but you do now.
              <br />
              <strong>Months or years.</strong>Gain the Trait "Unknown Skill". You do not know you have this skill and
              don't recall practicing it. At any later point when you take a Challenge, you can permanently replace this
              Trait with a relevant skill.
            </li>
            <li>
              {/* artifact, isolate signal, sense waveform
Strange abilities, levitation, force push
Esp Precognition, chromaception */}
              <h5 className="subheader">How were things different after this event?</h5>
              <strong>You felt an unexplainable connection to technology.</strong> Gain either the Specialization{" "}
              <SpecializationLink name="Isolate Signal" /> or <SpecializationLink name="Sense Waveform" />.
              <br />
              <strong>You had strange new abilities.</strong> Gain either the Specialization{" "}
              <SpecializationLink name="Force Push" /> or <SpecializationLink name="Levitate" />.
              <br />
              <strong>You were aware of things shouldn't be.</strong> Gain either the Specialization{" "}
              <SpecializationLink name="Chromaception" /> or <SpecializationLink name="Precognition" />.
            </li>
            <li>
              <h5 className="subheader">Did this period leave any physical evidence?</h5>
              <strong>Not a trace.</strong> Gain the Trait "Unknown Skill". You do not know you have this skill and
              don't recall practicing it. At any later point when you take a Challenge, you can permanently replace this
              Trait with a relevant skill.
              <br />
              <strong>An artifact.</strong>Gain a trait representing an object you had when you came to, you didn't
              recognize it. Is it a mundane but useful like a weapon, tool, vehicle, or even property, or is it
              something stranger you don't understand?
              <br />
              <strong>Social clues.</strong>Gain a Trait representing social connections with other people that had the
              same experience as you or with someone that knows what happened but cannot tell you.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. When you came back from your
              lost time, these abilities seemed stronger.
            </li>
          </ol>
        </Section>
        <Section header="Trauma" isClassified>
          <p>
            <strong>A single dramatic event changed your life.</strong> Perhaps you survived a disaster or extreme
            danger, maybe you witnessed something overtly supernatural or terrifying, or maybe you had a mental break
            caused by prolonged stressors, social conflicts, or intense embarrassment. To manage the situation, you
            tapped into resources you didn't realize you had by connecting with your Hidden Body. Ever since, you've had
            the feeling that Hidden Space was there, just barely out of reach waiting for you to connect with it again.
          </p>
          <ol>
            <li>
              <h5 className="subheader">What was the threat you perceived from this event?</h5>
              <strong>Physical safety.</strong> Gain a Trait representing a type of fitness you developed to deal with
              the consequences of this event.
              <br />
              <strong>Mental integrity.</strong> Gain a Trait representing a type of mental disciple or fortitude that
              you developed to deal with the consequences of this event.
              <br />
              <strong>Social dignity.</strong> Gain a Trait representing something that helped you escape this situation
              as fast as possible.
            </li>
            <li>
              <h5 className="subheader">How fresh is this event in your memory?</h5>
              <strong>Like it was yesterday.</strong> Gain a Trait representing skills that seemed to manifest in you
              the moment you needed them most during this event.
              <br />
              <strong>You still discuss it with those close to you.</strong>
              Gain a Trait representing a close friend that would have your back.
              <br />
              <strong>It is ancient history.</strong>
              Gain a Trait representing skills or practices you cultivated to ensure this never happens again.
            </li>
            <li>
              <h5 className="subheader">How were you spared from the worst consequences of this event?</h5>
              <strong>You sprung into action.</strong> You acted fast to protect yourself. Gain either the
              Specialization <SpecializationLink name="Danger Sense" /> or <SpecializationLink name="Evasion" />.
              <br />
              <strong>You endured.</strong> Gain either the Specialization <SpecializationLink name="Auto-integrity" />{" "}
              or <SpecializationLink name="Determination" />.
              <br />
              <strong>Something seemingly supernatural occurred.</strong> In the heat of the moment, you did something
              impossible. Gain either the Specialization <SpecializationLink name="Combat Shielding" /> or{" "}
              <SpecializationLink name="Sublime Body" />.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. These abilities seemed to come
              online for you after the traumatic event.
            </li>
            <li>
              Choose an Action Bonus to increase from 0 to 1. In attempting to survive or recover from your trauma, this
              action proved necessary.
            </li>
          </ol>
        </Section>
      </Section>
    </Section>
  );
}
export default ChapterCharacters;
