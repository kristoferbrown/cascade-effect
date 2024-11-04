import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Break from "../components/break/break";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import Crosslink from "../components/crosslink/crosslink";
import Metabolism from "../components/metabolism/metabolism";
import Section from "../components/section/section";
import Logomark from "../svgs/logomark";

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
                Half of the abilities of Cascade Effect characters are the capabilities provided by the physical body.
                The physical body is measured by the 3
                <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolisms</Crosslink>,
                <Metabolism fight />, <Metabolism flight />, and <Metabolism focus />.
              </p>
              <p>
                Think of <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolisms</Crosslink> not as
                attributes that represent your talents, but rather resources provided by the hardware of the body and
                brain. They represent how much effort you can bring to an activity and how much stress you can handle.
                Each <Crosslink target={linkMap.Gameplay}>Metabolism</Crosslink> is assigned a score, from 3 to 6 for
                normal humans.
              </p>
              <p>
                Every action you take, from the athletic to the academic, will use one
                <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolism</Crosslink>.
              </p>
            </>
          }
          rightPageContent={
            <>
              <h2>The Hidden Body</h2>
              <p>
                New Cascade Effect characters are just starting to discover an entire new world. They're beginning to
                sense hints of the presene of a second incorporeal body existing in parallel to their physical form, but
                outside of normal space. Their connection to this hidden body is starting to manifest a second set of
                resources that can supplement the physical body and mind, boosting it beyond its normal limits.
              </p>
              <p>
                The hidden body is measured by the 3
                <Crosslink inverted target={linkMap.HiddenMetabolisms}>
                  Hidden Metabolisms
                </Crosslink>
                of <Metabolism self />, <Metabolism near />, and <Metabolism far />. These Metabolisms are not available
                to normal humans, and starting characters are only just beginning to get access to them.
              </p>
              <p>
                Every action you take will also use one
                <Crosslink inverted target={linkMap.HiddenMetabolisms}>
                  Hidden Metabolism
                </Crosslink>
                , resulting in a pairing of a physical and hidden metabolism.
              </p>
            </>
          }
        />
      }
    >
      <Section header="Creating a Character">
        <p>
          The first step of playing the game is to create the character you will play as. The two main statistics of
          your character are <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink> and
          <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>, and the steps of character creation
          will walk you through defining these values. You will also have a few secondary characteristics like Action
          Bonuses or Entanglements, that will primarily come into play after character creation.
        </p>
        <p>
          <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink> are numbers indicating how much effort,
          attention, and willpower a character can bring to an action.
        </p>
        <p>
          <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> are keywords that flesh out additional
          details about your character, and they provide a bonus whenever they are relevant to an action. They can be
          almost anything that your character is able to leverage in a useful way. Generally, skills, social status,
          relationships, community membership, authority, wealth, possessions, careers, apparent physical traits,
          fashions, roles you fill, or other advantages are good Traits. Don't think too hard about having precise
          <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>, if they're vague you will be able to
          revise them later. When playing the game, any time one of your Traits is relevant to a Challenge you gain
          Advantage on it.
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
        <Section header="Step by Step Characters" isInset>
          <ol>
            <li>
              Choose a character concept.
              <ol>
                <li>
                  Set each <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolism</Crosslink> score to 3,
                  and then choose one that represents your character concept to increase by one.
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
                  Pick the <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> provided by this
                  origin.
                </li>
                <li>Choose a Physical Metabolism score that represents this origin and increase it by 1.</li>
              </ol>
            </li>
            <li>
              Choose a Hidden Origin.
              <ol>
                <li>
                  Pick the <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> provided by this
                  origin.
                </li>
                <li>Choose a Physical Metabolism score that represents this origin and increase it by 1.</li>
                <li>Choose a Hideen Metabolism score that represents this origin, and increase it from 0 to 1.</li>
              </ol>
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
            <Crosslink target={linkMap.PhysicalMetabolisms}>Physical Metabolisms</Crosslink>, of Fight, Flight, and
            Focus. Start each with a score of 3 points, then choose one that most represents your character concept and
            increase this one to 4.
          </p>
          <p>
            Finally, write in 3 <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>. These can be
            anything, but in general they should somehow represent your character concept. For example, a scientist
            might have
            <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> representing fields of knowledge and
            contacts in academia.
          </p>
          <p>
            <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> can be vague at this stage! During
            play, an unspecific
            <Crosslink target={linkMap.AdvantageAndDisadvantage}>Trait</Crosslink> can be revised to something more
            specific as we get to know the character.
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
            description will give you three prompts that grant you{" "}
            <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>. The prompts provide guidelines for
            what these traits might be, but ultimately you can choose anything that fits your character even if the
            prompts don't. Finally, this origin will let you choose a Physcial Metabolism to increase.
          </p>
        </Section>
        <Section header="Step 3: Hidden Origin">
          <p>
            A Hidden Origin describes how a character first began to sense their
            <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolisms</Crosslink>. Often a first encounter with
            supernatural phenomena is what starts this process. Typically, the way your character experiences their
            Hidden Body slightly colors their personality and strongly influences the way they react to their
            <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolisms</Crosslink> being stressed.
          </p>
          <p>
            Choose a Hidden Origin from the list at the end of this chapter. Once you have chosen, this origin's
            description will give you three prompts that grant you{" "}
            <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>. The prompts provide guidelines for
            what these traits might be, but ultimately you can choose anything that fits your character even if the
            prompts don't. Finally, this origin will let you choose both a Physcial and a Hidden Metabolism to increase.
          </p>
        </Section>
        <Section header="Choosing Traits">
          <p>
            Traits can be almost anything that fleshes out your character and what they bring to the table. They don't
            need to follow the prompts in the origins you choose exactly, or even at all if you have a better idea.
          </p>
          <p>
            In general Traits should be assets, not flaws. They don't need to be purely useful, even just a description
            of your appearance or demeanor can be a good Trait that helps you fit in with certain people. A Trait can
            even have several downsides, but it shouldn't be purely negative or completely useless.
          </p>
          <Section header="Combat Skills and Equipment">
            <p>
              <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> chosen at character creation are
              not meant to represent combat proficiency. They will typically not be relevant for standard combat
              actions. For example, a Trait like "Army Marksman" might be relevant in many of situations, but it won't
              help you shoot a gun in a fight. Action Bonuses better represent combat proven abilities. If you wish to
              play a character who is already capable in combat, you may omit one of your Traits and instead increase an
              Action Bonus of your choice from 0 to 1. Action Bonuses greater than 1 represent a level of combat ability
              typically unavailable to normal humans. Additionally, you may also omit a Trait to instead gain a small
              arsenal of combat equipment.
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
              <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolisms</Crosslink> and starting characters are
              similar with only a single point in one of them. However, this is about to change. Somewhere early after
              the game has started, usually during the first session, the characters will have their first contact with
              the overtly superatural and this contact will force them to fully realize their connection to their hidden
              body.
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
          <Section header="Leveling Up">
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
          next <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>. Some may even provide bonuses to
          <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink>.
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
              <strong>Counterculture.</strong> Are you part of the Frontier movement? An ASYM Slouch fashionista? A DIY
              ecopunk maker? Choose or invent a subculture you belong to and Gain a Trait representing your ability to
              fit in with it.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. This is the ability you find yourself leaning into most
              in life.
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
              <h5 className="subheader">How do you feel about living under RFID restrictions?</h5>
              <strong>It's not so bad.</strong>The RFID system makes things safer and more convenient for you. Gain a
              Trait representing a vocational or academic skill, position of authority, or access to a useful social
              community.
              <br />
              <strong>I'm rebelling against it.</strong> The RFID system has triggered a lot of protest, including
              yours. You work from within to subvert or undermine the system. Gain a Trait representing an membership in
              an underground hacker, maker, or activist community, or skills you use to interfere with technical or
              social systems.
            </li>
            <li>
              <h5 className="subheader">Why did you end up getting registered with an RFID?</h5>
              <strong>My city started requiring them recently or I moved to a city that already did.</strong> Gain a
              trait representing your knowledge of your home city or useful social connections within it.
              <br />
              <strong>My career requires it.</strong> Gain a Trait representing a career in law inforcement, the
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
              provide food, water, power, data, or some other necessity.
              <br />
              <strong>I support the people in the community.</strong> Gain a Trait reprsenting a soft skill you use to
              keep the community together and running.
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
          </ol>
        </Section>
        <Section header="Liberated" isInset>
          <p>
            "Liberated" is a euphemism the frontier movement uses to refer to regions that have been abandoned by their
            parent nations, most often due to unmanagable climate disasters. Most people leave these regions and become
            refugees or migrants, but some continue their lives there fending for themselves under martial law.
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
              <h5 className="subheader">Do you still live there most of the time?</h5>
              <strong>Yes, I'm trying to make the most of it.</strong> Gain a Trait representing a skill or community
              you depend on to survive without fully functional supply chains and infrastructure.
              <br />
              <strong>No, I'm a refugee from this situation.</strong> Gain a Trait representing a skill or social
              connection you used to build a new life somewhere else.
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
              Gain three instances of the <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink>{" "}
              Unknown Skill. You don't realize you have these skills and you do not recall practicing them. Later, when
              you attempt a Challenge, you can permanently replace one of these
              <Crosslink target={linkMap.AdvantageAndDisadvantage}>Traits</Crosslink> with a skill relevant to this
              Challenge.
            </li>
            <li>
              Choose a Physical Metabolism and increase it by 1. Regardless of where it came from in your past, you feel
              confident in this ability.
            </li>
          </ol>
        </Section>
      </Section>
      <Break page />
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
            subconsciously access to a small portion of the
            <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolisms</Crosslink>, giving you more resources to
            succeed at anything you attempted. Perhaps you've always wondered why other people had to put so much effort
            into learning new skills when it seemed so easy for you.
          </p>
          <ol>
            <li>
              <h5 className="subheader">In your youth, what were you?</h5>
              <strong>A focused prodigy.</strong> You trained one specific skill intensely, gain a Trait representing
              it. <br />
              <strong>A prolific dabbler.</strong> You tried everything, once. Gain a Trait representing the social
              contacts you made while trying every hobby or a broad field of trivia you've picked up along the way.
            </li>
            <li>
              <h5 className="subheader">Were your talents...</h5> <strong>Physical.</strong> Gain a Trait representing a
              type of physical fitness or athletic competition you excel in. <br />
              <strong>Academic.</strong> Gain a Trait representing a field of knowledge you know inside and out.
              <br />
              <strong>Social.</strong> Gain a Trait representing a social skill you're surprised other's don't have or a
              useful social community.
              <br />
              <strong>Combat Oriented.</strong> Gain an Action Bonus for an Attack or Reaction that comes naturally to
              you in times of stress.
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
          </ol>
        </Section>
        <Section header="Dissociated Self" topicKey="dissociatedSelfOrigin" isClassified>
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
              <h5 className="subheader">Before this experience peaked, how much did it affect you?</h5>
              <strong>Things mostly seemed normal.</strong>Gain a Trait representing a skill or social connection you
              gained during a more conventional part your youth.
              <br />
              <strong>It was always a bit like that.</strong>Gain a Trait representing a skill or knowledge you gained
              in your youth that was considered outside of the stereotypes for someone who looked like you.
            </li>
            <li>
              <h5 className="subheader">During this experience, how did you cope?</h5>
              <strong>You turned inward.</strong> Gain a trait representing a creative skill or an uncommon field of
              knowledge you cultivated during this time.
              <br />
              <strong>You found community.</strong> Gain a trait representing a contact or a community that supported
              you during difficult times.
            </li>
            <li>
              <h5 className="subheader">Have you overcome this experience?</h5> <strong>You thrived.</strong> Gain a
              Trait that represents a type of physical or social fitness that you developed during a transformative time
              that occurred at the end of this experience.
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
              <strong>You sought diagnosis or explanation for why you felt the world this way.</strong> Gain a skill
              representing knowledge of a field of scientific or non-traditional medicine, a spiritual practice, or an
              awareness of your true nature that is useful in everyday life.
              <br />
              <strong>You sought a theory explaining why the world actually was this way.</strong> Gain a Trait
              representing a field of obscure and unusual knowledge or a social connection or community that shares a
              specific outlook on the world with you.
            </li>
            <li>
              <h5 className="subheader">Have you overcome this experience?</h5>
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
        <Section header="Dissociated Far" topicKey="dissociatedFarOrigin" isClassified>
          <p>
            <strong>You always struggled to relate to other people.</strong> Maybe they always reacted differently than
            you expected; maybe you couldn't understand socializing seemed to be natural to others, maybe it was
            exhausting to be around other people; maybe other people seemed unreal to you; or maybe you just felt
            awkward. Whatever the manifestation, you experienced a chronic dissociation of the Far Metabolism, making
            the other people seem inscrutable or illusory. However, this experience led to sensing more concretely the
            precise bounds of your Hidden Body, and therefore how to interact with it.
          </p>
          <ol>
            <li>
              <h5 className="subheader">Before this experience peaked, how much did it affect you?</h5>
              <strong>Things mostly seemed normal.</strong> Gain a Trait representing a skill or social connection you
              gained during a more conventional part your youth.
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
              <h5 className="subheader">Have you overcome this?</h5> <strong>You Thrived.</strong> Gain a Trait that
              represents a social connection or community that quickly became important to you after this experience.
              <br />
              <strong>It still shapes you.</strong> Gain a Trait that represents a skill, field of knowledge, or asset
              you cultivate in private.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. Your experience helped you
              develop these abilities.
            </li>
          </ol>
        </Section>
        <Section header="Missing Time" isClassified>
          <p>
            <strong>You experienced a period of missing time that you do not remember.</strong> Perhaps intense
            dissociation rendered you unconscious or unable to remember this time, or perhaps something even stranger
            occurred. Whatever happened, afterwards you had a subtle awareness of the hidden body and a drive to find
            answers about the nature of this experience.
          </p>
          <ol>
            <li>
              <h5 className="subheader">How long was this lost period?</h5>
              <strong>Hours or days.</strong> You weren't gone long, but you came back different. Gain a Trait
              representing something you couldn't do before, but you can now.
              <br />
              <strong>Months or years.</strong>Gain the Trait "Unknown Skill". You do not know you have this skill and
              don't recall practicing it. At any later point when you take a Challenge, you can permanently replace this
              Trait with a relevant skill.
            </li>
            <li>
              <h5 className="subheader">How fresh is this experience?</h5>
              <strong>It just ended.</strong>Gain the Trait "Unknown Skill". You do not know you have this skill and
              don't recall practicing it. At any later point when you take a Challenge, you can permanently replace this
              Trait with a relevant skill.
              <br />
              <strong>Years ago.</strong>Gain a Trait representing a field of knowledge you learned or a community you
              became part of during your attempts to understand what happened.
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
            caused by prolonged stressors, social conflicts, or intense embarassment. To manage the situation, you
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
              <strong>It is ancient history.</strong>
              Gain a Trait representing skills or practices you cultivated to ensure this never happens again.
            </li>
            <li>
              <h5 className="subheader">How were you spared from the worst consequences of this event?</h5>
              <strong>You sprang into action.</strong> Gain a Trait representing skills that seemed to manifest in you
              the moment you needed them most.
              <br />
              <strong>Something unlikely or seemingly supernatural occurred.</strong>
              Gain a Trait representing something or someone that helped you during this event and could do so again.
            </li>
            <li>
              Choose one Physical and one Hidden Metabolism and increase them both by 1. These abilities seemed to come
              online for you after the traumatic event.
            </li>
          </ol>
        </Section>
      </Section>
    </Section>
  );
}
export default ChapterCharacters;
