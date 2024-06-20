import Break from "../components/break/break";
import ChapterIntro from "../components/chapter-intro/chapter-intro";
import Crosslink from "../components/crosslink/crosslink";
import Metabolism from "../components/metabolism/metabolism";
import { topics } from "../context/rulebookContext";
import Section from "../components/section/section";
import Logomark from "../svgs/logomark";

function Chapter2() {
  return (
    <Section coordinates={"2"} header="Characters">
      <ChapterIntro>
        <p>
          Cascade Effect characters are just starting to discover an entire new world. Their mind is beginning to sense
          the first hints of a second incorporeal body existing in parallel to their physical form, but outside of
          normal space. Their connection to this body is starting to manifest a second set of resources, resources that
          could be used to overcome the limits imposed by the physical body, mind, and world.
        </p>
        <Logomark />
      </ChapterIntro>

      <Section header="Physical Body" isChapterIntroColumn>
        <p>
          Most people are defined by the 3 <Crosslink target={topics.PHYS_METAB}>Physical Metabolisms</Crosslink>,
          <Metabolism fight />, <Metabolism flight />, and <Metabolism focus />.
        </p>
        <p>
          Think of these not as attributes that represent your talents, but rather resources provided by the hardware of
          the body and brain. They represent how much effort you can bring to an activity and how much stress you can
          handle. Each <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> is assigned a score, from 3 to 6 for
          normal humans.
        </p>
        <p>
          Every action you take, from the athletic to the academic, will use one
          <Crosslink target={topics.PHYS_METAB}>Physical Metabolism</Crosslink>.
        </p>
      </Section>
      <Section header="Hidden Body" isChapterIntroColumn isClassified>
        <p>
          Your character also has 3
          <Crosslink inverted target={topics.HIDDEN_METAB}>
            Hidden Metabolisms
          </Crosslink>
          that normal humans do not; <Metabolism self />, <Metabolism near />, and <Metabolism far />.
        </p>
        <p>
          A new character is only just beginning to sense and understand them. They are the resources provided by your
          connection to your Hidden Body, an intangible organ residing outside of normal space. This connection can be
          tapped to create energy, supplementing the physical body and mind, boosting it beyond its normal limits.
        </p>
        <p>
          Every action you take will also use one
          <Crosslink inverted target={topics.HIDDEN_METAB}>
            Hidden Metabolism
          </Crosslink>
          , resulting in a pairing of the physical and hidden.
        </p>
      </Section>
      <Break page />
      <Section header="Creating a Character">
        <p>
          The first step of playing the game is to create the character you will play as. The two main statistics of
          your character are <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> and
          <Crosslink target={topics.TRAITS}>Traits</Crosslink>, and the steps of character creation will walk you
          through defining these values. You will also have a few secondary characteristics like Action Bonuses or
          Entanglements, that will primarily come into play after character creation.
        </p>
        <p>
          <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> are numbers indicating how much energy,
          attention, and willpower a character can bring to an action.
        </p>
        <p>
          <Crosslink target={topics.TRAITS}>Traits</Crosslink> are keywords that flesh out additional details about your
          character, and they provide a bonus whenever they are relevant to an action. They can be almost anything that
          your character is able to leverage in a useful way. Generally, skills, social status, relationships,
          authority, wealth, possessions, or other advantages are good
          <Crosslink target={topics.TRAITS}>Traits</Crosslink>. Don't think too hard about having precise
          <Crosslink target={topics.TRAITS}>Traits</Crosslink>, if they're vague you will be able to revise them later.
        </p>
        <p>
          Action Bonuses are a number assigned to each action you can take in combat, representing your skill with
          taking that action while under pressure. For a starting character, most of these will be 0 but a few might be
          increased to 1 during the steps of character creation.
        </p>
        <p>
          Finally, Entanglements and their Specializations will not be touched during character creation. Only later
          when you spend experience points will these come up.
        </p>
        <Section header="Step by Step Character Creation" isInset>
          <ol>
            <li>
              Choose a character concept.
              <ul>
                <li>
                  Set each <Crosslink target={topics.PHYS_METAB}>Physical Metabolism</Crosslink> score to 3, and then
                  choose one that represents your character concept to increase by one.
                </li>
                <li>
                  Pick 3 <Crosslink target={topics.TRAITS}>Traits</Crosslink> that reflect your concept.
                </li>
              </ul>
            </li>
            <li>
              Choose a Physical Origin.
              <ul>
                <li>Choose a Physical Metabolism score that represents this origin and increase it by one.</li>
                <li>
                  Pick the <Crosslink target={topics.TRAITS}>Traits</Crosslink> provided by this origin.
                </li>
              </ul>
            </li>
            <li>
              Choose a Hidden Origin.
              <ul>
                <li>Choose a Physical Metabolism score that represents this origin and increase it by one.</li>
                <li>Choose a Hideen Metabolism score that represents this origin, and increase it from 0 to 1.</li>
                <li>
                  Pick the <Crosslink target={topics.TRAITS}>Traits</Crosslink> provided by this origin.
                </li>
              </ul>
            </li>
          </ol>
        </Section>
        <Section header="Step 1: Character Concept">
          <p>
            Start imagining your character and write down their name and a character concept. A concept is a few words
            that describe their defining characteristic. Maybe it's a personality type, a hobby, a job title, a combat
            role, or a special talent. It's OK if your concept starts out vague and gets revised as you create this
            character, or you can even come back to this step at the end of character creation if you don't have ideas
            right now.
          </p>
          <p>
            Once you have a concept to work with, look at your
            <Crosslink target={topics.PHYS_METAB}>Physical Metabolisms</Crosslink>, of Fight, Flight, and Focus. Start
            each with a score of 3 points, then choose one that most represents your character concept and increase this
            one to 4.
          </p>
          <p>
            Finally, write in 3 <Crosslink target={topics.TRAITS}>Traits</Crosslink>. These can be anything, but in
            general they should somehow represent your character concept. For example, a scientist might have
            <Crosslink target={topics.TRAITS}>Traits</Crosslink> representing fields of knowledge and contacts in
            academia.
          </p>
          <p>
            <Crosslink target={topics.TRAITS}>Traits</Crosslink> can be vague at this stage! During play, an unspecific
            <Crosslink target={topics.TRAITS}>Trait</Crosslink> can be revised to something more specific as we get to
            know the character.
          </p>
        </Section>
        <Section header="Step 2: Physcial Origin">
          <p>
            A Physical Origin represents the political climate your character comes from. This origin is not about
            nationality, culture, or class, but rather the opportunities and restrictions your character experiences due
            to the circumstances they live under.
          </p>
          <p>
            Choose a Physical Origin from the list at the end of this chapter. Once you have chosen, this origin's
            description will give you some prompts that grant you <Crosslink target={topics.TRAITS}>Traits</Crosslink>.
            The prompts provide guidelines for what these traits might be, but ultimately you can choose anything that
            fits your character if the prompt doesn't. Finally, this origin will let you choose a Physcial Metabolism to
            increase.
          </p>
        </Section>
        <Section header="Step 3: Hidden Origin">
          <p>
            A Hidden Origin describes how a character first began to sense their
            <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolisms</Crosslink>. Often a first encounter with
            supernatural phenomena is what starts this process. Typically, the way your character experiences their
            Hidden Body slightly colors their personality and strongly influences the way they react to their
            <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolisms</Crosslink> being stressed.
          </p>
          <p>
            Choose a Hidden Origin from the list at the end of this chapter. Once you have chosen, your origin's
            description will give you some <Crosslink target={topics.TRAITS}>Traits</Crosslink> with guidelines for what
            these traits might be, Finally, this origin will let you choose both a Physcial Metabolism to increase.
          </p>
        </Section>
        <Section header="Combat Traits" isInset>
          <Crosslink target={topics.TRAITS}>Traits</Crosslink> chosen at character creation are not meant to represent
          combat proficiency, they will typically not be relevant for standard combat actions. For example, a Trait like
          "Army Marksman" might be relevant in many of situations, but it won't help you shoot a gun in a fight. Action
          Bonuses better represent combat proven abilities. If you wish to play a character who is already capable in
          combat, you may omit one of your Traits and instead increase an Action Bonus of your choice from 0 to 1.
          Action Bonuses greater than 1 represent a level of combat ability typically unavailable to normal humans.
        </Section>
        <Section header="What's Next?">
          <p>
            After finishing your character, you're ready to start their adventure. However, there also are a few cases
            later when you might further edit your character. This can occur during your story's Inciting Incident, any
            time you want to revise one of your Traits, and later as you gain and spend experience to level up your
            character.
          </p>
          <Section header="The Inciting Incident" isInset>
            <p>
              Normal humans typically do not have points in the
              <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolisms</Crosslink> and starting characters are similar
              with only a single point in one of them. However, this is about to change. Somewhere early after the game
              has started, usually during the first session, the characters will have their first contact with the
              overtly superatural and this contact will force them to fully realize their connection to their hidden
              body.
            </p>
            <p>
              After this inciting incident occurs, permanently increase all of your
              <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink> scores by 1.
            </p>
          </Section>
          <Section header="Revising Traits" isInset>
            <p>
              After character creation your Traits might still be vague and general, everyone in your game is still
              getting to known your character. During gameplay if you have a trait you haven't used much, you can revise
              this trait to something more concrete. You can even do this during a Challenge so that your revised trait
              is relevant to the Challenge.
            </p>
            <p>
              You can only revise traits when it doesn't contradict things that have already been shown to be true about
              your character. A trait you have already used several times cannot be completely changed to something
              totally unrelated, but a trait you have never used perhaps could be if the new trait makes more sense for
              the character. You can also usually change a trait from something general to something more specific. The
              GM has the final decision on any trait revision.
            </p>
            <p>
              For example, if you were facing a challenge involving ropes and knots, your vague Trait "Athlete" would
              not help. However, you could revise this to the more specific Trait "Rock Climber", and suddenly it's
              quite relevant. Later, you couldn't revise "Rock Climber" into some other atheletic pursuit, but perhaps
              you could change it to something even more specific like "Mountaineer", "Alpinist", or "Ice Climber".
            </p>
          </Section>
          <Section header="Leveling Up" isInset>
            <p>
              After each session, the GM will give your character some experience points. These can be spent to gain
              Entanglements and special abilities. See chapter 5 for more details on how to use your experience points.
            </p>
          </Section>
        </Section>
      </Section>

      <Section header="Physical Origins">
        <p>
          Physical Origins represent your character's place in the world and will provide guidance for choosing your
          next <Crosslink target={topics.TRAITS}>Traits</Crosslink>. Some may even provide bonuses to
          <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink>.
        </p>
        <Section header="Conventional" isInset>
          <p>
            The vast majority of people in the world fall into this category. You live a life that wouldn't be unusual
            of in the present day.
          </p>
          <ul>
            <li>
              Gain the <Crosslink target={topics.TRAITS}>Trait</Crosslink> Fit In. This
              <Crosslink target={topics.TRAITS}>Trait</Crosslink> is relevant any time you want to be friendly with
              people of a similar social class to you or hide in a crowd.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a skill learned from a trade,
              career, or education.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a useful social connection or a
              material asset.
            </li>
          </ul>
        </Section>
        <Section header="Documented" isInset>
          <p>
            As a reactionary response to repeated disasters, many regions have enacted laws requiring RFID cards that
            can be scanned from several meters away. You live or work in a region where this is enforced, or you used
            to.
          </p>
          <ul>
            <li>
              Gain the <Crosslink target={topics.TRAITS}>Trait</Crosslink> RFID. As long as you carry this ID, you can
              move and work freely in regions where this is required, but law enforcement knows your previous scan
              locations.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a skill learned from a career or
              education.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a useful social connection
              property, or position of authority
            </li>
          </ul>
        </Section>
        <Section header="Frontier" isInset>
          <p>
            In one way or another, you've abandoned traditional society. Maybe you've joined a community in the
            Post-National Frontier movement, or maybe you've just struck out on your own. You've destroyed your RFID if
            you ever had one.
          </p>
          <ul>
            <li>
              Gain the <Crosslink target={topics.TRAITS}>Trait</Crosslink> Frontier Clout. Actual experience with
              frontier lifestyle is respected by people all over the political spectrum. This
              <Crosslink target={topics.TRAITS}>Trait</Crosslink> is relevant any time you want to fit in with frontier
              folk, or impress people leading more traditional lives.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a skill or tool you use to provide
              safety, resources, power, water, or data for yourself or your community. This may be any non-restricted
              weapon.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing your knowledge of a political
              ideology or praxis, or a social connection to someone with a lot of power within a counter culture
              movement.
            </li>
          </ul>
        </Section>
        <Section header="Fugitive" isInset>
          <p>
            Regardless of whether you are guilty or wrongly accused, you are on the run from the law. You either have to
            live in hiding, or you've created a false identity for yourself. This is easier in some places, but very
            difficult in places with RFID laws.
          </p>
          <ul>
            <li>
              Gain the <Crosslink target={topics.TRAITS}>Trait</Crosslink> Safe House. You have access to a space where
              you can go to lay low and reliably hide from pursuers.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a skill you use to avoid unwanted
              attention, social interactions, or bureaucratic entanglements.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing any non restricted weapon, an
              untraceable income source, a fake RFID, or a possession or social contact that helps you live under the
              radar.
            </li>
          </ul>
        </Section>
        <Section header="Liberated" isInset>
          <p>
            "Liberated" is a euphemism the frontier movement uses to refer to regions that have been abandoned by their
            parent nations, most often due to unrepairable climate disasters. Most people have left these regions and
            become refugees, but something has kept you living or frequently visiting one of these regions to fend for
            yourself under martial law.
          </p>
          <ul>
            <li>
              Gain the <Crosslink target={topics.TRAITS}>Trait</Crosslink> Resourceful. This
              <Crosslink target={topics.TRAITS}>Trait</Crosslink> is relevant any time you are trying to acquire
              something you need by searching, socializing, or navigating a bureaucracy
            </li>
            <li>
              The harsh conditions of your life have forced you to remain flexible and capable. Increase any one
              <Crosslink target={topics.PHYS_METAB}>Physical Metabolism</Crosslink> by 1. This cannot cause it to
              increase above 6.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a skill or social connection you
              can use to survive without reliable access to advanced infrastructure.
            </li>
          </ul>
        </Section>
        <Section header="Unknown" isInset>
          <p>
            You don't remember your origin. For reasons unknown to you, before a certain point in time you have no
            memories. Whether this point is a few days ago or a few years ago, you've been struggling to find an
            identity for yourself ever since.
          </p>
          <ul>
            <li>
              Gain the <Crosslink target={topics.TRAITS}>Traits</Crosslink> Unknown Combat Skill and Unknown Academic
              Skill. You don't realize you have these skills and you do not recall practicing them. One time when you
              attempt to perform an action, you can permanently replace one of these
              <Crosslink target={topics.TRAITS}>Traits</Crosslink> with a skill relevant to the action. One skill must
              be useful in combat and the other must be a field of knowledge.
            </li>
            <li>
              Increase any one <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink> from 0 to 1.
              Whatever happened before your memory begins left you aware of your hidden body.
            </li>
          </ul>
        </Section>
      </Section>
      <Section header="Hidden Origins">
        <p>
          A Hidden Origin represents how your character first came to sense their connection to their Hidden Body. This
          can happen simply from this connection being strong and learning to understand it intuitively, however, more
          often it comes from enduring some sort of dissociative experience. Dissociation occurs when the constant
          information transfer between the physical brain and the hidden body is disrupted in some way. The algorithm of
          consciousness in humans depends on this connection, and any disruption leads to pyschedelic mental side
          effects, and ultimately memory loss and unconsciousness. Rarely, when exposed to dissociative conditions some
          people began to sense the connection to hidden space itself and develop an intuitive sense of how to control
          it.
        </p>
        <Section header="Competence" isClassified>
          <p>
            <strong>Things always seemed to come easily for you.</strong> Somehow, at a young age, you started to
            subconsciously access to a small portion of the{" "}
            <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolisms</Crosslink>, giving you more resources to succeed
            at anything you attempted. Perhaps you've always wondered why other people had to put so much effort into
            learning new skills when it seemed so easy for you.
          </p>
          <ol>
            <li>
              <h3>In your youth, what were you?</h3>
              <strong>A focused prodigy.</strong> You trained one specific skill intensely, gain a Trait representing
              it. <br />
              <strong>A prolific dabbler.</strong> You tried everything, once. Gain a Trait representing the social
              contacts you made while trying every hobby or a broad field of trivia you've picked up along the way.
            </li>
            <li>
              <h3>Were your talents...</h3> <strong>Physical.</strong> Gain a Trait representing a type of physical
              fitness or athletic competition you excel in. <br />
              <strong>Academic.</strong> Gain a Trait representing a field of knowledge you know inside and out.
              <br />
              <strong>Social.</strong> Gain a Trait representing a social skill you're surprised other's don't have or a
              useful social community.
              <br />
              <strong>Combat Oriented.</strong> Gain an Action Bonus for an Attack or Reaction that comes naturally to
              you in times of stress.
            </li>
            <li>
              <h3>How did this affect you socially?</h3>
              <strong>You stayed humble.</strong> Gain a Trait representing useful social contact, community, or
              network. These people have your back. <br />
              <strong>You knew you were special.</strong> Choose a skill or field of study that came naturally to you
              and gain a Trait representing it.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. You were always talented in
              these domains.
            </li>
          </ol>
        </Section>
        <Section header="Dissociated Self" isClassified>
          <p>
            <strong>You always felt like something was wrong about your body.</strong> Maybe you saw yourself with a
            different gender or appearance; maybe felt like you were a mind awkwardly piloting a body; maybe you wished
            you could ignore the incessant repeated demands having a human body places on you. Whatever the
            manifestation, you experienced a chronic dissociation of the Self Metabolism, making your physical body feel
            like a separate, possibly antagonistic, entity. This experience led directly to you sensing the separation
            and connections between your Physical and Hidden Bodies.
          </p>
          <ol>
            <li>
              <h3>Before this experience peaked, how much did it affect you?</h3>
              <strong>Things mostly seemed normal.</strong>Gain a Trait representing a skill or social connection you
              gained during a more conventional part your youth.
              <br />
              <strong>It was always a bit like that.</strong>Gain a Trait representing a skill or knowledge you gained
              in your youth that was considered outside of the stereotypes for someone who looked like you.
            </li>
            <li>
              <h3>During this experience, how did you cope?</h3> <strong>You turned inward.</strong> Gain a trait
              representing a creative skill or an uncommon field of knowledge you cultivated during this time.
              <br />
              <strong>You found community.</strong> Gain a trait representing a contact or a community that supported
              you during difficult times.
            </li>
            <li>
              <h3>Have you overcome this experience?</h3> <strong>You thrived.</strong> Gain a Trait that represents a
              type of physical or social fitness that you developed during a transformative time that occurred at the
              end of this experience.
              <br />
              <strong>It still shapes you.</strong> Gain a Trait that represents a skill or knowledge you have developed
              as part of a masking or coping strategy.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. These domains just seemed to
              click for you after this experience.
            </li>
          </ol>
        </Section>
        <Section header="Dissociated Near" isClassified>
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
              <h3>Before this experience peaked, how much did it affect you?</h3>
              <strong>Things mostly seemed normal.</strong> Gain a Trait representing a skill or social connection you
              gained during a more conventional part your youth.
              <br />
              <strong>It was always a bit like that.</strong> Gain a Trait representing a field of knowledge you
              developed searching for answers to why others didn't seem to notice something that seemed unavoidable to
              you.
            </li>
            <li>
              <h3>During this experience, how did you cope?</h3>
              <strong>You sought diagnosis or explanation for why you felt the world this way.</strong> Gain a skill
              representing knowledge of a field of scientific or non-traditional medicine, a spiritual practice, or an
              awareness of your true nature that is useful in everyday life.
              <br />
              <strong>You sought a theory explaining why the world actually was this way.</strong> Gain a Trait
              representing a field of obscure and unusual knowledge or a social connection or community that shares a
              specific outlook on the world with you.
            </li>
            <li>
              <h3>Have you overcome this experience?</h3>
              <strong>You Thrived.</strong> Gain a Trait that represents a skill that requires physically navigating,
              sensing, or otherwise engaging with your surroundings, practicing this skill helped you find your
              connection with the world.
              <br />
              <strong>It still shapes you.</strong> Gain a Trait that represents a creative practice, a field of
              knowledge, or skill you developed in academia or online.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism increase them both by 1. These abilities seemed more natural
              to you after this experience.
            </li>
          </ol>
        </Section>
        <Section header="Dissociated Far" isClassified>
          <p>
            <strong>You always struggled to relate to other people.</strong> Maybe they always reacted differently than
            you expected; maybe you couldn't understand socializing seemed to be natural to others, maybe it was
            exhausting to be around other people; maybe other people seemed unreal to you; or maybe you just felt
            awkward. Whatever the manifestation, you experienced a chronic dissociation of the Far Metabolism, making
            the other people seem inscrutable or illusory. However, this experience led to sensing more concretely the
            precise bounds of your Hidden Body, and therefore how to interact with it.
          </p>
          <ul>
            <li>
              <h3>Before this experience peaked, how much did it affect you?</h3>
              <strong>Things mostly seemed normal.</strong> Gain a Trait representing a skill or social connection you
              gained during a more conventional part your youth.
              <br />
              <strong>It was always a bit like that.</strong> Gain a Trait representing a skill or field of knowledge
              that was important to you in your youth.
            </li>
            <li>
              <h3>During this experience, how did you cope?</h3> <strong>You learned to mask.</strong> Gain a Trait
              representing a social skill or connection you've cultivated despite the challenges.
              <br />
              <strong>You pursued other things.</strong> Gain a Trait representing a field of knowledge or creative
              process you invested yourself in instead.
            </li>
            <li>
              <h3>Have you overcome this?</h3> <strong>You Thrived.</strong> Gain a Trait that represents a social
              connection or community that quickly became important to you after this experience.
              <br />
              <strong>It still shapes you.</strong> Gain a Trait that represents a skill, field of knowledge, or asset
              you cultivate in private.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. Your experience helped you
              develop these abilities.
            </li>
          </ul>
        </Section>
        <Section header="Missing Time" isClassified>
          <p>
            <strong>You experience a period of missing time that you do not remember.</strong> Perhaps intense
            dissociation rendered you unconscious or simply unable to remember this time, or perhaps something even
            stranger occurred. Whatever happened, afterwards you had a subtle awareness of the hidden body and a drive
            to find answers about the nature of this experience.
          </p>
          <ul>
            <li>
              Gain the <Crosslink target={topics.TRAITS}>Trait</Crosslink> Fearless. When others would be afraid or
              shocked by encountering something truly unknown, you are unaffected.
            </li>
            <li>
              Gain the <Crosslink target={topics.TRAITS}>Trait</Crosslink> Unknown Skill. You don't realize you have
              this skill and you do not recall practicing it. One time when you attempt to perform an action, you can
              permanently replace this <Crosslink target={topics.TRAITS}>Trait</Crosslink> with a relevant skill.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a skill you developed to track
              down or research whatever it is that happened to you during your lost time.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. When you came back from your
              lost time, these abilities seemed stronger.
            </li>
          </ul>
        </Section>
        <Section header="Trauma" isClassified>
          <p>
            <strong>A single dramatic event changed your life.</strong> Perhaps you survived a disaster or extreme
            danger, maybe you witnessed something overtly supernatural or terrifying, or maybe you had a mental break
            caused by prolonged stressors, social conflicts, or intense embarassment. To manage the situation, you
            tapped into resources you didn't realize you had by connecting with your Hidden Body. Ever since, you've had
            the feeling that Hidden Space was there, just barely out of reach waiting for you to connect with it again.
          </p>
          <ul>
            <li>
              Gain the <Crosslink target={topics.TRAITS}>Trait</Crosslink> Last Reserves. Up to once per scene, if you
              are exposed to a source of danger you haven't encountered before, you gain a point in each
              <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink>. These points can go above your
              normal maximums.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a skill you learned to cope with
              past trauma or or avoid it in the future.
            </li>
            <li>
              Gain a <Crosslink target={topics.TRAITS}>Trait</Crosslink> representing a contact who witnessed this event
              with you or a resource you stockpile to prepare for this event's return.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. These abilities seemed to come
              online after the traumatic event.
            </li>
          </ul>
        </Section>
      </Section>
      <Break page />
    </Section>
  );
}
export default Chapter2;
