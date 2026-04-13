import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Break from "../components/break/break";
import Section from "../components/section/section";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import SpecializationDescription from "../components/section/spec-desc";
import EntanglementDescription from "../components/section/ent-desc";
import EventDescription from "../components/section/event-desc";
import StyleDescription from "../components/section/style-desc";
// import Crosslink from "../components/crosslink/crosslink";
import Pair from "../components/metabolism/pair";
import Metabolism from "../components/metabolism/metabolism";
import ChallengeParams from "../components/challengeParams/challengeParams";

function ChapterEntanglements() {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;

  return (
    <Section
      coordinates={"7"}
      header="Entanglements"
      topicKey="entanglementsChapter"
      introContent={
        <ChapterIntroSpread
          chapterNumber={7}
          title="Entanglements"
          leftPageContent={
            <>
              <h3>The 9 Intuitive Styles</h3>
              <p>
                Each Entanglement contains specializations sorted into two styles, one intuitive and one esoteric. The
                Intuitive Styles improve the existing capabilities of the body and mind.
              </p>
              <h4>Strong</h4>
              <p>
                Pairs <Pair fight self /> to enhance unarmed attacks, grappling, and power.
              </p>
              <h4>Smooth</h4>
              <p>
                Pairs <Pair fight near /> to enhance melee attacks, stealth, and finesse.
              </p>
              <h4>Sharp</h4>
              <p>
                Pairs <Pair fight far /> to enhance ranged attacks and precision.
              </p>
              <h4>Tough</h4>
              <p>
                Pairs <Pair flight self /> to enhance unarmed defense and stamina.
              </p>
              <h4>Mobile</h4>
              <p>
                Pairs <Pair flight near /> to enhance melee defense, agility, and speed.
              </p>
              <h4>Quick</h4>
              <p>
                Pairs <Pair flight far /> to enhance ranged defense, wits, and prediction.
              </p>
              <h4>Confident</h4>
              <p>
                Pairs <Pair focus self /> to enhance willpower and executive function.
              </p>
              <h4>Bright</h4>
              <p>
                Pairs <Pair focus near /> to enhance intelligence and creativity.
              </p>
              <h4>Alert</h4>
              <p>
                Pairs <Pair focus far /> to enhance physical and social awareness.
              </p>
            </>
          }
          rightPageContent={
            <>
              <h3>The 9 Esoteric Styles</h3>
              <p>
                Esoteric Styles represent more unusual approaches to solving the same problems. They provide new, often
                overtly supernatural, abilities the body is normally incapable of.
              </p>
              <h4>Schizosomata</h4>
              <p>
                Pairs <Pair fight self /> to radically transform or empower the physical body.
              </p>

              <h4>Abjuration</h4>
              <p>
                Pairs <Pair flight self /> to create durable barriers, wards, and filters.
              </p>

              <h4>Sublimation</h4>
              <p>
                Pairs <Pair focus self /> to traverse hidden space intangibly and invisibly.
              </p>

              <h4>Electromagnetism</h4>
              <p>
                Pairs <Pair fight near /> to control the fundamental force of light or electricity.
              </p>

              <h4>Gravitonertia</h4>
              <p>
                Pairs <Pair flight near /> to control the fundamental force of mass and motion.
              </p>

              <h4>Chromodynamism</h4>
              <p>
                Pairs <Pair focus near /> to control the fundamental force that binds atoms.
              </p>

              <h4>Evocation</h4>
              <p>
                Pairs <Pair fight far /> to create explosive and destructive blasts.
              </p>
              <h4>Pneumaplegia</h4>
              <p>
                Pairs <Pair flight far /> to make fields that help and hinder others.
              </p>
              <h4>Telethesia</h4>
              <p>
                Pairs <Pair focus far /> to sense and manipulate other minds.
              </p>
            </>
          }
        ></ChapterIntroSpread>
      }
    >
      <Section header="Fight + Self">
        <p>
          This entanglement allows one to augment or alter their physical form. Mastering it can grant you peerless
          unarmed offense, superhuman strength, or the ability to transform your body.{" "}
        </p>
        <EntanglementDescription
          hidMet={<Metabolism self />}
          physMet={<Metabolism fight />}
          esoStyle={"Schizosomata"}
          intStyle={"Strong"}
        />

        <Break />
        <Section header="Strong Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Fight + Self boosts the brute physical strength of the body
                and the efficacy of Unarmed Attacks.
              </p>
            }
            styleName="Strong"
            associatedAction="Unarmed Attack actions"
            rank1Bonus="Fighting up close and personal allows you to disable opponents quickly. When you cause Stress with an Unarmed Attack, you may choose which Physical Metabolism is in the pair that the Stress is dealt to instead of it always being Flight."
          />
          <Section header="Brawler" isInset>
            <SpecializationDescription
              intro={<p>You can seamlessly blend armed and unarmed close combat, gaining the best of both worlds.</p>}
              ranks={[
                <p>You may replace the Self component of Unarmed Attack Challenges with Near.</p>,
                <p>You may replace the Near component of armed Melee Attack Challenges with Self. </p>,
                <p>
                  When you Prepare a Melee or Unarmed Attack, you can add either Self or Near to it instead of Focus.
                  You do not need a free hand to inflict or maintain the Grappled state.{" "}
                </p>,
              ]}
            />
          </Section>
          <Section header="Explosive Strength" isInset>
            <SpecializationDescription
              intro={
                <p>
                  By learning to deploy increased strength instantly and with precise timing, you can greatly increase
                  the power behind explosive movements.
                </p>
              }
              ranks={[
                <p>
                  When you use an inhale action to Move in a straight line towards a target, and then then use your
                  exhale action to make a Melee or Unarmed attack against the target, you can put your whole weight and
                  strength into the strike. This lets you add your rank in this Specialization as extra Progress to the
                  attack that can only be used on the Grapple or Off Balance Goals.
                </p>,
                <p>
                  The distance you can jump is tripled. Any obstacle that can be jumped over cannot increase the Risk or
                  add additional fixed Goals to a Move action.
                </p>,
                <p>
                  When you use the free movement from making a Melee or Unarmed Attack, you can move an extra meter as
                  long as you use it to move directly towards the target before the attack.{" "}
                </p>,
              ]}
            />
          </Section>
          <Section header="Iron Grip" isInset>
            <SpecializationDescription
              intro={<p>You can use weapons that would normally be too large to wield effectively.</p>}
              ranks={[
                <p>You can wield a weapon of size 3 in one hand.</p>,
                <p>You cannot be disarmed against your will. Weapons of size 4 can be used without being Prepared.</p>,
                <p>You can wield weapons of size 4 in one hand.</p>,
              ]}
            />
          </Section>
          <Section header="Lifting Capacity" isInset>
            <SpecializationDescription
              intro={<p>You can lift objects beyond what your physique would normally allow.</p>}
              ranks={[
                <p>You can reliably lift 300 kilograms.</p>,
                <p>
                  You can reliably lift 600 kilograms. Any non-attack Challenge that is primarily about raw physical
                  strength is always low Risk.
                </p>,
                <p>
                  You can reliably lift 1200 kilograms. Any non-attack Challenge that is primarily about raw physical
                  strength is always low Effort.
                </p>,
              ]}
            />
          </Section>
          <Section header="Martial Artist" isInset>
            <SpecializationDescription
              intro={<p>Your empty hands have become powerful weapons.</p>}
              ranks={[
                <p>Your Unarmed Attack can use the Off Balance Goal in the same way Melee Attacks can.</p>,
                <p>
                  When you make an Unarmed Attack, you can choose for it to hit as if it were either a blunt or bladed
                  weapon of size 1.
                </p>,
                <p>Your reach with Unarmed Attacks increases by 1 meter.</p>,
              ]}
            />
          </Section>
          <Section header="Reverberation" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can harness the latent tension created by dynamic situations and store it for later, amplifying
                  yourself, and then unleash the energy later.
                </p>
              }
              ranks={[
                <p>
                  Any time you participate in a Challenge with at least a medium risk and effort level, you may add an
                  extra Goal called Reverberation. Any Progress applied to Reverberation doesn't affect the current
                  Challenge. Instead it is stored for later, reverberating back and forth between your physical and
                  hidden bodies. In any future Challenge, you can remove all of your stored Progress and apply it to
                  that Challenge. You must use all of it at once, you can't use only a portion of it. While you have
                  Progress stored in this way you feel anxious and uneasy. All stored Progress is lost at the end of the
                  scene.
                </p>,
                <p>
                  While you have stored Progress, you no longer feel anxious. If fact, you feel alive and confident. If
                  you use the stored Progress on a Challenge that is primarily social, you have Advantage.
                </p>,
                <p>
                  While you have stored Progress, you are perceived as more real and powerful granting you Advantage on
                  every Challenge that is primarily social, even if you don't use the stored progress on it.{" "}
                </p>,
              ]}
            />
          </Section>
        </Section>

        <Break />

        <Section header="Schizosomata Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style entangles Fight + Self to enable the discipline of the “split body” which allows one
                to develop ways to temporarily reshape the body, rewire the brain, and boost your physical capabilities.
              </p>
            }
            styleName="Schizosomata"
            rank1Bonus="You can induce the Empower cascade event."
            associatedAction="inducing Empower events"
          />
          <EventDescription
            eventName="Empower"
            intro="You focus on your physical form, altering and improving it for a short time."
            linkTarget={linkMap.SchizosomataStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ fight: true, self: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Schizosomata Style"}
                  goals={["Capacity"]}
                />
                <p>
                  Increase the capacity, but not the current value, of your Self Metabolism by the result of the
                  Capacity Goal, and then you enter a special State called Empowered.{" "}
                </p>
                <h5>The Empowered State</h5>
                <p>
                  While in this state your appearance undergoes minor but noticeable changes, appearing stronger, more
                  intimidating, more beautiful, or unearthly in some way, as you see fit. You cannot induce this event
                  again while you have the Empowered state.
                </p>
                <p>
                  At the end of every turn after the turn you induced this event, this State decays. If your Self
                  capacity is greater than your Self score it takes a point of Stress. If it is not, you lose the
                  Empowered State.
                </p>
                <h5>Strain</h5>
                <p>
                  Your heightened Self capacity is a resource that some Specializations in this Style consume by causing
                  Strain. To Strain, you take a point of Stress to Self. You can only Strain while in the Empowered
                  State
                </p>
                <h5>Immediate Effects</h5>
                <p>
                  In addition to empowering you for further action, this event also causes immediate effects. After you
                  induce this event as an exhale action, the immediate effect is that you can instantly Rest or
                  Manipulate without consuming an action.
                </p>
                <p>
                  Certain Specializations within this Style allow you to induce this event at other times than as an
                  exhale action, triggering different immediate effects when you do.
                </p>
              </>
            }
          />
          <Section header="Combat Form" isClassified>
            <SpecializationDescription
              intro={<p>You can transform your body to become have natural weapons and armor.</p>}
              ranks={[
                <p>
                  You can induce Empower as an inhale action. When you do this the immediate effect is that your next
                  attack you make this turn is Prepared.
                </p>,
                <p>
                  When you are Empowered you can choose to have natural weapons grow out of your body. When making
                  Unarmed Attacks you may replace your Strong rank with you Schizosomata rank in the attack's allocation
                  bonus, or you may Strain to add both bonuses simultaneously.
                </p>,
                <p>
                  When you are Empowered you can harden your skin into effective armor. Replace the armor rating of any
                  armor you are wearing with your Schizosomata rank while empowered.
                </p>,
              ]}
            />
          </Section>
          <Section header="Empowered Healing" isClassified>
            <SpecializationDescription
              intro={<p>You can physically repair the body instead of reshaping it and Empower others.</p>}
              ranks={[
                <p>
                  Any time you use the Heal action you can induce Empower as part of the same action. The target of the
                  Heal action gains the benefits of Empower, but no additional immediate effect occurs. Targeting
                  someone other than yourself this way consumes materials from your own body, causing a point of Stress
                  to Fight, but does not require medical equipment.
                </p>,
                <p>
                  Your Heal action can remove the Dying state and now restores the capacity of every injured Physical
                  Metabolism instead of just one.
                </p>,
                <p>
                  When using Heal and Empower as the same action, after resolving the Heal effect the Empower event can
                  cause further healing. For each point of the Progress on the Capacity Goal, you can remove a point of
                  Stress from any Physical Metabolism or use it normally to increase the Self Capacity by 1.
                </p>,
              ]}
            />
          </Section>
          <Section header="Hemokinesis" isClassified>
            <SpecializationDescription
              intro={<p>Your mastery of biology allows you to manipulate the blood itself when it is spilled.</p>}
              ranks={[
                <p>
                  You can induce Empower as a reaction to gaining an injury State. If you do, the immediate effect is
                  that your lost blood coagulates into a hard structure around your wounds, increasing your armor rating
                  by by 1. You retain this armor for as long as you have this injury state or the Empowered state.
                </p>,
                <>
                  <p>
                    You can induce Empower as a reaction to anyone within your reach gaining an injury State. When you
                    do this, the target is the injured person and you can use either the normal Capacity Goal, or an
                    alternative Goal Hemorrhage, but not both at the same time.
                  </p>
                  <p>
                    If you use Capacity, the injured person gains the benefits of being empowered as if you had induced
                    the event targeting yourself, including the armor described by the previous rank.
                  </p>
                  <p>
                    If you use Hemorrhage, you leverage the target's blood loss against them, causing painful sharp
                    clots, high pressure sprays, or dangerous pressure drops. The target takes an additional amount of
                    Stress equal to the Hemorrhage Goal, divided among their remaining Physical metabolisms as you see
                    fit.
                  </p>
                </>,
                <p>
                  When inducing Empower as a reaction to an injury state on yourself or an adjacent target, you can use
                  both the Capacity and Hemorrhage Goals simultaneously. When you do, you can spread the Self capacity
                  gains and extra Stress taken as you see fit between every person adjacent to you or the target. All
                  targets that gain Capacity gain the Empowered state and a point of armor that lasts as long as this
                  state does.
                </p>,
              ]}
            />
          </Section>
          <Section header="Rage" isClassified>
            <SpecializationDescription
              intro={<p>When Empowered, adrenaline pushes you beyond the limits of your body.</p>}
              ranks={[
                <p>
                  You can induce the Empower event as a reaction to taking Stress from an attack. If you do, the
                  immediate effect reduces the amount of Stress taken by your Schizosomata rank.{" "}
                </p>,
                <p>
                  You can Strain to double your lifting capacity and gain Advantage on all Challenges involving feats of
                  Strength for the next minute.
                </p>,
                <p>
                  When you regain Metabolism points at the start of a turn, you can Strain to ignore any injury or
                  dissociation states until your next turn. When you do so, any Physical Metabolism that would regain 0
                  points instead regains points equal to your Schizosomata rank.
                </p>,
              ]}
            />
          </Section>
          <Section header="Shapeshift" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  While the hidden body is mutable, the physical body is typically more static. This specialization
                  changes that, allowing you transform yourself permanently.
                </p>
              }
              ranks={[
                <p>
                  You permanently become an idealized version of yourself. You decide whether that means attractive,
                  youthful, intimidating, matching the ideal of a specific subculture, or any other appearance you
                  aspire to. Gain a Trait that describes this appearance.
                </p>,
                <p>
                  Over the course of an hour you can slowly and permanently transform yourself into any appearance,
                  build, gender, voice, or skin color you wish. This change can only roughly imitate specific other
                  people, if someone examines you closely they can tell you are an impostor. For every 10 kilograms or
                  centimeters of height that your new body differs from your original body, you must take a point of
                  Stress to Self.
                </p>,
                <>
                  <p>
                    Over the course of an hour, you can permanently move a point from one Physical Metabolism score to
                    another. The minimum score a metabolism can attain this way is 2.
                  </p>
                  <p>You can also now perfectly mimic another person when you transform.</p>
                  <p>
                    Additionally, you can make the transformations allowed by this Specialization instantly as an exhale
                    action instead of over an hour, but doing so is highly stressful and reduces both your Fight and
                    Self capacities to 1 bringing you to the brink of injury and dissociation.
                  </p>
                </>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />

      <Section header="Fight + Near">
        <p>
          Mastering this Entanglement can grant you peerless melee offense or the ability to modify light and
          electricity.
        </p>
        <EntanglementDescription
          physMet={<Metabolism fight />}
          hidMet={<Metabolism near />}
          esoStyle={"Electromagnetism"}
          intStyle={"Smooth"}
        />

        <Section header="Smooth Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Fight + Near refines your skill with melee combat and
                finesse.
              </p>
            }
            styleName="Smooth"
            rank1Bonus="When anyone uses the Move action to enter or exit the area within 1 meter of you, you may Counterattack. Free movement from any action other than Move does not trigger this response. When you Counterattack, the original attacker takes Threat equal to your Smooth rank and must make the appropriate reaction. Specializations in this style add additional Counterattack effects and triggers."
            associatedAction="Melee Attack actions"
          />
          <Section header="Ambidexterity" isInset>
            <SpecializationDescription
              intro={
                <p>You can split your proprioceptive awareness between both hands without any loss of coordination.</p>
              }
              ranks={[
                <p>
                  When wielding a weapon in each hand, you can strike with both as a single Melee or Ranged Attack
                  action. Add the Size values of both weapons to the Progress generated by the attack instead of just
                  one, but you must allocate a minimum number of Metabolism points equal to their combined Size. Both
                  attacks must have the same target and must be melee or ranged, you can't mix types.{" "}
                </p>,
                <p>
                  When making a dual-weapon attack, you may divide the Progress applied to Threat, or any other Goal of
                  the attack, between two different targets.
                </p>,
                <>
                  <p>
                    When making a dual-weapon attack, one of your weapons, the smaller one of they are different sizes,
                    no longer counts toward the minimum Metabolism allocation required for the attack, though you still
                    add its Size to your Progress.
                  </p>
                  <p>
                    Additionally, if you you're holding both a ranged and a melee weapon and your attack is Prepared,
                    instead of adding Focus as the third metabolism you may use the trio of Fight + Near + Far to attack
                    both a ranged enemy and a melee enemy with the same attack.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Counter" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can punish opponents for letting their guard down and use the momentum of their failed attacks
                  against them.
                </p>
              }
              ranks={[
                <p>
                  Your Melee or Unarmed Defense Reactions to attacks made on an enemy's turn have an additional Goal
                  called Counter. If Progress is assigned to Counter, you may Counterattack after your Reaction dealing
                  extra Threat equal to the amount of Counter Progress.
                </p>,
                <p>Enemies using inhale actions or Ranged attacks within your reach trigger your Counterattack. </p>,
                <p>
                  If you apply an amount of Progress to the Counter Goal that is equal to or greater than the size of
                  the weapon you are using, you can add the weapon's size to the Threat dealt by the Counterattack.
                </p>,
              ]}
            />
          </Section>
          <Section header="Opportunist" isInset>
            <SpecializationDescription
              intro={<p>You can easily find and devastatingly exploit any gaps in an enemy's defenses. </p>}
              ranks={[
                <p>
                  When you attack an enemy with the Off Balance state, resolve the attack as if you were Hidden from
                  them.
                </p>,
                <p>
                  When you deal more Stress to a target with a Melee or Unarmed attack than it can take due to the
                  Metabolisms used in it's defense Reaction being reduced to 0 capacity, then the extra Stress is dealt
                  directly to all of the target's remaining Physical Metabolisms, instead of just one of them.{" "}
                </p>,
                <p>
                  If an enemy is within reach of a Melee or Unarmed Attack from you and an ally that is on the opposite
                  side of the space the enemy occupies, then this enemy is flanked. Resolve any attacks you make against
                  them as they were Off Balance and you were Hidden.
                </p>,
              ]}
            />
          </Section>
          <Section header="Silence" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can exert a subtle influence over nearby objects that prevents vibrations and sound from
                  propagating.
                </p>
              }
              ranks={[
                <p>You can move completely silently at any speed.</p>,
                <p>
                  As an exhale action, you can take a normal effort and low risk Challenge requiring Fight + Near, to
                  prevent sound from propagating in an area. The radius of this area in meters and the number of minutes
                  it lasts are both equal to the Progress used to create it. No sound or vibration can be heard, felt,
                  or created inside the area. The area is centered on you and follows you as you move.
                </p>,
                <p>
                  You can silence an area as an inhale action instead of an exhale action. When you silence an area, you
                  can still hear normally while inside it and you can if it stays at its initial location instead of
                  following you.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sleight of Hand" isInset>
            <SpecializationDescription
              intro={<p>You can interact with things undetected and without permission.</p>}
              ranks={[
                <>
                  <p>
                    When you use the Interact action, you can do so without anyone noticing. If you do this to draw a
                    weapon unnoticed on the first round in combat, you have advantage on the next attack you take with
                    it.
                  </p>
                  <p>
                    Additionally, you can quickly draw, stow, swap, or reload any weapon without using any actions.{" "}
                  </p>
                </>,
                <p>
                  If you are Hidden, you can use the Interact action to interact with, plant, or steal object in
                  someone's pockets or bags without being noticed. Alternatively, if you Improvise as an Inhale action
                  to create a diversion, you can Interact as if you were Hidden on your next exhale action.{" "}
                </p>,
                <p>
                  If you are Hidden or the target is Off Balance, you can use the Interact action to take an object from
                  someone's hands, however doing so will always be noticed. If this object was a weapon, you have
                  Advantage on attacking with it if you do so as your next action.{" "}
                </p>,
              ]}
            />
          </Section>
          <Section header="Weapon Master" isInset>
            <SpecializationDescription
              intro={<p>You make the most of any weapon you're holding. </p>}
              ranks={[
                <>
                  <p>
                    Drawing, stowing, swapping, or reloading weapons can be done during your turn without using any
                    actions.
                  </p>
                  <p>
                    Double the bonus for the type of melee weapon you are wielding. Blunt weapons now deal 2 extra Off
                    Balance and bladed weapons now deal 2 extra Threat, instead of 1.
                  </p>
                </>,
                <p>
                  The bonus for the type of melee weapon you are wielding is further improved. When you deal Stress to a
                  target with a blunt weapon you may push the target 1 meter away from you, and when you attack with a
                  bladed weapon it ignores 1 point of the target's armor.
                </p>,
                <>
                  <p>Your reach while wielding a weapon increases by 1 meter.</p>
                  <p>
                    Additionally, any object you are holding counts as a blunt, bladed, or ranged weapon, not an
                    improvised weapon. Although fragile objects may still break after being used as a weapon.
                  </p>
                </>,
              ]}
            />
          </Section>
        </Section>

        <Break />

        <Section header="Electromagnetism Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the Fight + Near entanglement allows you to control the fundamental force of
                electromagnetism. This ability is primarily expressed through the Refract cascade event.
              </p>
            }
            styleName="Electromagnetism"
            rank1Bonus="You can induce the Refract cascade event."
            associatedAction="inducing Refract events"
          />

          <EventDescription
            eventName="Refract"
            intro="You reach out with your mind and take control of nearby photons."
            linkTarget={linkMap.ElectromagnetismStyle}
            description={
              <>
                <ChallengeParams
                  pair={{ fight: true, near: true }}
                  risk={"Medium"}
                  effort={"Medium"}
                  allocBonus={"Electromagnetism Style"}
                  goals={["Power", "Range"]}
                />
                <p>
                  Bend the path of an existing flow of light, electricity, or magnetism within a number of meters equal
                  to Range. This can, for example, discharge a battery, short circuit a device, reverse a magnet's
                  polarity, or focus sunlight into a beam. This only effects a single object or at most a 1 cubic meter
                  portion of a larger energy flow. Without further Electromagnetism Specializations, this event can only
                  crudely redirect this energy, it cannot create, destroy, increase, decrease, transform, or exercise
                  fine control.
                </p>
                <p>
                  The amount of energy you can control is determined by the Power Goal. The exact strength of a specific
                  energy source is up to the GM, according to the guidelines in the following list. If the result of
                  Power is lower than the strength of the energy source, it cannot be controlled. Other specializations
                  that refer to a Power level are using this scale.
                </p>
                <ul>
                  <li>1: Consumable batteries, single LEDs, fridge magnets, static shocks.</li>
                  <li>2: Indoor lighting, dim indirect daylight, large lithium ion batteries.</li>
                  <li>3: Residential wiring, direct sunlight, rare earth magnets.</li>
                  <li>3-6: Residential overhead power lines, industrial electromagnets.</li>
                  <li>6-9: A lightning strike.</li>
                  <li>9-15: High-tension distribution lines.</li>
                  <li>15+: The output of a power plant, catastrophic atmospheric phenomena.</li>
                </ul>
                <p>
                  If energy is redirected with the intent to to harm someone, it primarily dazzles, blinds, or stuns. It
                  bypasses armor and triggers no reaction, dealing Stress equal to the Power level directly to a single
                  target's Flight + Near, up to a limit of your rank in the Electromagnetism Style. Any additional Power
                  over this limit is the intensity of a State inflicted on the target, either Suppressed if the energy
                  was primarily light or Off Balance if it was primarily electrical or magnetic.
                </p>
                <p>
                  The effects of Refract last only until your next turn. If you wish for them to continue you just keep
                  inducing the event.
                </p>
              </>
            }
          />

          <Section header="Amplify Waveform" isClassified>
            <SpecializationDescription
              intro={<p>You can use Refract to create electromagnetic energy from nothing.</p>}
              ranks={[
                <>
                  <p>
                    Your Refract event now has a Goal called Create. You cannot use the Create and Destroy Goals in the
                    same event.
                  </p>
                  <p>
                    You can amplify the strength of lower Power energy source affected by Refract, increasing it's Power
                    level to equal the result of the Create Goal.
                  </p>
                </>,
                <>
                  <p>
                    Your Refract event now has a Goal called Radius. The event can now affect everything in an area with
                    this Radius in meters. If this event causes harm, divide the Power level up between the targets as
                    you see fit.
                  </p>
                  <p>
                    You can also quickly create simple lights without using the Refract event. As an inhale action, take
                    a point of Stress to Focus and an object you touch begins emitting light of a color and brightness
                    of your choice, up to a brightness similar to common residential light bulbs. These lights last for
                    the rest of the scene.
                  </p>
                </>,
                <p>
                  You can use Refract to create energy from nothing. When you do this, the value of the Create Goal must
                  equal or exceed the value of the Power Goal, and the final Power level of the event is equal to the
                  Power Goal.
                </p>,
              ]}
            />
          </Section>
          <Section header="Frequency Shift" isClassified>
            <SpecializationDescription
              intro={<p>You can convert one form of energy into another. </p>}
              ranks={[
                <p>
                  When using Refract on light, instead of redirecting the light you can transform it from one wavelength
                  to another. For example, from one color to another or from visible to x-rays.
                </p>,
                <p>
                  When using Refract, instead of redirecting the energy, you can transform it from one type of
                  electromagnetism into another..
                </p>,
                <p>When using Refract, you can transform and redirect an energy flow simultaneously.</p>,
              ]}
            />
          </Section>
          <Section header="Modulate Signal" isClassified>
            <SpecializationDescription
              intro={<p>Your control over electromagnetism is so fine that you can embed information in it. </p>}
              ranks={[
                <>
                  <p>
                    As an exhale action, take a point of Stress to Focus to create a luminous message or image As an
                    exhale action, take any number of points of Stress to Focus publicly in the air, or privately
                    directly on the retina of someone you can see.
                  </p>
                  <p>
                    Additionally, when your Refract event inflicts the Off Balance or Suppressed state, you may choose
                    for it to instead inflict Enthralled or Afraid.
                  </p>
                </>,
                <>
                  <p>
                    As an exhale action, take a point of Stress to Focus to rewrite any electronic media you can touch,
                    emit a short wireless signal.
                  </p>
                  <p>
                    If you have any ranks in Spectral Senses, you can also intercept and modify signals when you do
                    this.
                  </p>
                </>,
                <>
                  <p>
                    After you spend an hour freely examining any wireless device, you can from then on emit signals it
                    can receive. As an inhale action, you can send a simple command to any device you have examined this
                    way.
                  </p>
                  <p>
                    If you have any ranks in Spectral Senses, you can have fluent two-way communications with these
                    devices with a bandwidth similar to speaking to a person.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Nullify" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can prevent electromagnetism from propagating meaningful distances through the air in a region.
                </p>
              }
              ranks={[
                <>
                  <p>
                    Your Refract event now has a Goal called Destroy. You cannot use the Create and Destroy Goals in the
                    same event.
                  </p>
                  <p>
                    You can decrease the strength of an energy source affected by Refract, reducing it's Power level to
                    by the result of the Destroy Goal. At this rank, the power level cannot be reduced below 1.{" "}
                  </p>
                </>,
                <p>
                  You can quickly create an area of darkness without using the Refract event. As an exhale action, take
                  any number of points of Stress to Focus and an object you touch begins emitting a sphere of darkness
                  with a radius in meters and duration in minutes equal to this number. Light cannot enter, travel, or
                  be emitted inside this area and everyone inside is blind.
                </p>,
                <>
                  <p>
                    When you use the Destroy Goal of Refract, you can reduce the Power level of the energy source to 0,
                    completely eliminating it.
                  </p>
                  <p>
                    When you create an area of darkness as an exhale action, you can allow a single narrow wavelength to
                    pass and then sensitize your eyes to this wavelength. This allows you to see in the area when no one
                    else can. Radio signals, electrical wires, and any senses that involve electromagnetism in this area
                    only function if you allow them to.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Photonic Combat" isClassified>
            <SpecializationDescription
              intro={<p>Your ability you use electromagnetism as a weapon improves.</p>}
              ranks={[
                <p>
                  The limit on the amount of Stress your Refract events can do before they only inflict States is your
                  Electromagnetism rank plus your rank in this Specialization.
                </p>,
                <p>
                  If a target is already Off Balance or Suppressed when your Refract event would inflict the same state,
                  the event deals only Stress with no limit instead of this state.{" "}
                </p>,
                <p>
                  Your Refract events can have paralytic, disorienting, or burning effects as needed, therefore if it
                  harms someone it deals Stress to Near + a physical metabolism of your choosing.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sense Waveform" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can emit a tiny amount of light in obscure parts of the spectrum and interpret its reflections.
                </p>
              }
              ranks={[
                <p>
                  At any time, you can have perfect vision of regardless of the circumstances, even in absolute
                  darkness. This sense does not require your eyes and you cannot be blinded, even by their destruction.
                  You cannot be Suppressed by the Retract event or other dazzling light sources. You can see physical
                  space normally while you have the Out of Body or Sublimed states.
                </p>,
                <p>
                  You can interpret emissions of all parts of the spectrum. For example, sensing infrared can grant you
                  practical heat vision, or sensing radio and microwave emissions can be used to detect the strength and
                  origin of any broadcast.
                </p>,
                <p>
                  You can emit and sense tiny amount of x-rays and sub-millimeter waves, allowing you to see through
                  solid materials and examine their contents or internal structure.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />

      <Section header="Fight + Far">
        <p>
          Mastering this Entanglement lets you precisely target things in ranged combat, or even directly attack things
          with blasts of energy.
        </p>
        <EntanglementDescription
          physMet={<Metabolism fight />}
          hidMet={<Metabolism far />}
          esoStyle={"Evocation"}
          intStyle={"Sharp"}
        />
        <Break />
        <Section header="Sharp Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Fight + Far boosts your ranged combat abilities and
                capability to do harm with precise strikes.
              </p>
            }
            styleName="Sharp"
            rank1Bonus="You have the precision needed to engage in ranged combat in crowded spaces. You ignore partial cover that is caused by another person being in the path of the your attacks or by the target grappling."
            associatedAction="Ranged Attack actions"
          />

          <Section header="Charm Person" isInset>
            <SpecializationDescription
              intro={
                <p>
                  One of the earliest purposes the far edges of the hidden body first evolved to fulfill was a
                  rudimentary way to identify friends and foes within one's species. You can hijack this system in
                  humans for your own purposes.
                </p>
              }
              ranks={[
                <p>
                  Unless you actively offend or act hostile, you always make a great first impression, people are
                  inclined to trust you, be your friend, or look to your for leadership.{" "}
                </p>,
                <>
                  <p>
                    As an exhale action, you make make a Challenge using Fight + Far that triggers a Willpower reaction
                    in a target. If the target is experiencing strong emotions, such as open hostility, involving you,
                    they have advantage on the reaction. If you get more Progress on this Challenge than the reaction,
                    the target is charmed by you. They experience one of the following effects for the rest of the
                    scene, or until they are physically or socially harmed by you. If anything notably unusual happens
                    during this effect, the target knows they were manipulated by you in some way.{" "}
                  </p>
                  <p>
                    <strong>Friend:</strong> The target regards you as a close friend, and is as helpful and trusting as
                    one. They will not target you in combat.
                  </p>
                  <p>
                    <strong>Stranger:</strong> The target cannot recognize your face and does not believe they know you.
                  </p>
                  <p>
                    <strong>Enemy:</strong> The target views you with distrust and hostility. This alone is not enough
                    to escalate a conflict, but if combat occurs the target is Taunted by you.
                  </p>
                </>,
                <p>
                  You can target 2 people simultaneously when you attempt to charm. If you Challenge beats the sum of
                  both of their reactions, instead of having their opinion of you change, their opinion of each other
                  changes.
                </p>,
              ]}
            />
          </Section>
          <Section header="Dead Eye" isInset>
            <SpecializationDescription
              intro={<p>You can line up difficult shots to targets with extreme precision.</p>}
              ranks={[
                <p>
                  As long as you can see your target, an attack that you have Prepared using Aim remains Prepared until
                  you use it. If you use the Aim action on a target that you already have an attack Prepared for, you
                  gain Advantage on the Prepared attack.
                </p>,
                <p>Prepared attacks ignore the target's armor.</p>,
                <p>
                  If you have a weapon with a scope or laser sight or other aiming tools, you can continue using Aim
                  against a target even after you have a Prepared attack with Advantage. Each time you do, you can an an
                  additional Metabolism to the pairing used in the attack until all Metabolisms are involved.
                </p>,
              ]}
            />
          </Section>
          <Section header="Menace" isInset>
            <SpecializationDescription
              intro={
                <p>The threat of your weapons can control a situation socially just as well as it can physically.</p>
              }
              ranks={[
                <p>
                  When you use the Manipulate action, it can inflict Suppressed if you're wielding a ranged weapon or
                  Off Balance of you're wielding a Melee weapon. You can use Fight or Focus on Manipulate Challenges.
                </p>,
                <p>
                  Your attack actions have the added Goals Afraid and Taunt that inflict these states with an intensity
                  equal to the Progress applied to them, with a maximum of 1 or the size of your weapon.
                </p>,
                <p>
                  If you are wielding a weapon, the Manipulate action can target multiple enemies that can see it. Split
                  any Progress on the Manipulate challenge between all targets.
                </p>,
              ]}
            />
          </Section>
          <Section header="Pierce" isInset>
            <SpecializationDescription
              intro={<p>You can make the most from the trajectory of a single attack.</p>}
              ranks={[
                <p>When your attack is Prepared, resolve it as if any targets in cover did not have cover.</p>,
                <p>
                  When making a ranged attack, you may target a line starting at your space instead of a single target.
                  You may choose how to divide the Threat and any other Goals of this attack between a number of the
                  closest targets equal to your Sharp rank on this line.
                </p>,
                <p>
                  Enemies never have full cover against you, treat it as partial cover instead. As long as you know
                  their exact position, you can target them.
                </p>,
              ]}
            />
          </Section>
          <Section header="Stealth Strike" isInset>
            <SpecializationDescription
              intro={
                <p>
                  When your opponent is unable to properly defend against you, you can use the opening guide your strike
                  towards their weakest point.
                </p>
              }
              ranks={[
                <p>
                  In certain conditions you can do a Stealth Strike, a regular attack that deals an amount of extra
                  Threat equal to your Sharp rank. You can do this any time you are hidden from your target.
                </p>,
                <p>You can make a Stealth Strike any time your target is Off Balance. </p>,
                <p>
                  You can make a Stealth Strike against any target that has not yet acted in combat after determining
                  initiative.
                </p>,
              ]}
            />
          </Section>
          <Section header="Suppress Area" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can effectively threaten areas by making it clear to anyone that they will be punished for
                  entering the area.
                </p>
              }
              ranks={[
                <p>
                  When making a Ranged Attack action instead of picking a single target, you may target an area with any
                  radius in meters of up to your weapon's size. When you do this, you may only apply Progress to State
                  inflicting Goals like Suppressed, and not to the Threat Goal. Divide the result of all of the Goals
                  between everyone in the targeted area as you see fit.
                </p>,
                <p>
                  Any time someone currently Suppressed by one of your Ranged Attack ends a turn without at least
                  partial cover from you, you may deal Threat to them equal to the intensity of the Suppressed State.
                  They may react to this as a Ranged Attack and it consumes ammunition from your weapon.
                </p>,
                <p>
                  When targeting an area with a Ranged Attack instead of a single target, you may use the Threat Goal if
                  you are wielding an automatic weapon.
                </p>,
              ]}
            />
          </Section>
        </Section>

        <Break />

        <Section header="Evocation Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the Focus + Near entanglement increases the effectiveness and adds new
                capabilities to the Evoke cascade event.
              </p>
            }
            styleName="Evocation"
            rank1Bonus="You can induce the Evoke cascade event."
            associatedAction="inducing Evoke events"
          />
          <EventDescription
            eventName="Evoke"
            intro="You selectively sublime half of the virtual particles in a path creating a small but highly destructive burst of antimatter."
            linkTarget={linkMap.EvocationStyle}
            description={
              <p>
                Inducing this is an a Risky and Strenuous Challenge that results in an attacking a target you can see
                with an explosive torrent of energy. The target is dealt Threat equal to Power and may defend with a
                Ranged Defense reaction.
              </p>
            }
          />

          <Section header="Annihilate" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can selectively sublimate half of the virtual particles normally created by an Evoke event into
                  hidden space, creating a small amount of antimatter which annihilates on impact, increasing the damage
                  output.
                </p>
              }
              ranks={[
                <p>The Power metric of your Evoke event has no limit, you can spend any amount of Progress on it.</p>,
                <p>
                  When inducing Evoke, you can intentionally take any amount of unavoidable Stress to Focus. The target
                  also takes this amount of Stress in addition to any Threat dealt to them.
                </p>,
                <p>Replace the Power metric of your Evoke event with “2 Threat, minimum = Bonus”.</p>,
              ]}
            />
          </Section>
          <Section header="Blast Radius" isClassified>
            <SpecializationDescription
              intro={<p>Your Evoke events can affect a larger area.</p>}
              ranks={[
                <p>
                  Your Evoke events gain the metric “Radius: 1 meter”. Everything within the Radius of the target of
                  Evoke is dealt the same amount of Threat as the target.
                </p>,
                <p>The Radius metric increases from “1 meter” to “2 meters”.</p>,
                <p>
                  You can sculpt the blast of your Evoke events, you may select any targets within Radius that are not
                  affected by the blast.
                </p>,
              ]}
            />
          </Section>
          <Section header="Combat Evocation" isClassified>
            <SpecializationDescription
              intro={<p>You are a master of using Evocation Attacks in tactical situations.</p>}
              ranks={[
                <p>Evoke ignores cover. You may choose if it ignites any flammable materials it strikes.</p>,
                <p>If you hit a target behind cover with Evoke, they gain the Suppressed state with intensity 2.</p>,
                <p>
                  Evoke ignores line of sight, you can target anyone as long as you have seen them since your last
                  turn.{" "}
                </p>,
              ]}
            />
          </Section>
          <Section header="Force Push" isClassified>
            <SpecializationDescription
              intro={<p>You can apply enough force to targets to move them.</p>}
              ranks={[
                <p>
                  When you deal Stress to a target due to an Evoke event or any other attack action, you may force them
                  to move directly away from you by 1 meter per rank you have in this specialization.
                </p>,
                <p>When your attack action forces a target to move, you can choose to move them in any direction.</p>,
                <p>
                  Your Evoke event gains the metric “Push: 1 meter”. Regardless of whether the event deals Stress or
                  not, it forces the target to move the Push distance in a direction of your choosing. If the event
                  dealt Stress, the movement from Push happens in addition to the movement described in the previous
                  ranks of this specialization. Increase your Far score by 1.
                </p>,
              ]}
            />
          </Section>
          {/* <Section header="TODO" isClassified></Section> */}
          {/* <Section header="TODO" isClassified></Section> */}
        </Section>
      </Section>

      <Break page />
      <Section header="Flight + Self">
        <p>
          This entanglement helps one defend them self from unarmed blows, reduce damage taken in general, improve
          endurance, and even to protect oneself and others by creating barriers of force. It can increase the bonuses
          for the Unarmed Defense reactions, Rest actions, or the Ward cascade event.
        </p>
        <EntanglementDescription
          physMet={<Metabolism flight />}
          hidMet={<Metabolism self />}
          esoStyle={"Abjuration"}
          intStyle={"Tough"}
        />

        <EventDescription
          eventName="Ward"
          intro="You create a translucent barrier of force that prevents anything from crossing it."
          inductionTime="Full Action"
          linkTarget={linkMap.AbjurationStyle}
          metrics={[
            { name: "Durability", value: "1 Threat, minimum = Bonus" },
            { name: "Duration", value: "1 round, minimum = Bonus" },
            { name: "Length", value: "1 meter, minimum = Bonus" },
          ]}
          description={
            <>
              <p>
                Choose a straight line starting from a point in any adjacent space and ending at any point within the
                Length metric. For the Duration, a barrier prevents anything from crossing this line. If this line
                crosses any occupied spaces, you choose which side of the barrier each occupier is on. Attacks that
                target the barrier, or something on the other side of it, deal Threat only to the barrier. Each point of
                Threat reduces the barrier's Durability by 1, until it reaches 0 durability and is destroyed. The attack
                that destroys the barrier is still blocked completely, regardless of how much Threat it dealt.
              </p>
              <p>These barriers completely block things in hidden space just as well as they block physical objects.</p>
              <p>
                You have some control over the cosmetic appearance of your barriers. However, they are always
                transparent enough not to hinder vision but still easily visible due to a faint color or luminosity.
              </p>
            </>
          }
        />
        <Break />
        <Section header="Tough Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Flight + Self boosts your endurance, staying power, and
                unarmed defense.
              </p>
            }
            styleName="Tough"
            rank1Bonus="You recover quickly instead of facing the long term consequences of injury. When you recover Stress at the start of each day, you completely recover all Stress. Additionally, you no longer require medical care to recover from the Dying state and lose this state any time a scene ends."
            associatedAction="Unarmed Defense reactions"
          />
          <Section header="Diehard" isInset>
            <SpecializationDescription
              intro={<p>It is extremely hard to take you out of a fight.</p>}
              ranks={[
                <p>
                  When one of your Physical Metabolism maximums is reduced to 0, you do not gain the injury State that
                  this normally causes and may continue acting normally. You only gain the injury State if this
                  Metabolism would take further Stress at a later point while its maximum is still 0.
                </p>,
                <p>
                  Any time you take more than 1 point of Stress from being attacked, reduce the amount of Stress you
                  take by 1.
                </p>,
                <p>Once per day, if you would die you instead do not die.</p>,
              ]}
            />
          </Section>
          <Section header="Extropy" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You unconsciously use the cascade effect to create the energy your body needs to maintain your health.
                </p>
              }
              ranks={[
                <p>You no longer require food or water to remain healthy and comfortable.</p>,
                <p>
                  You no longer require breathing oxygen to remain healthy and comfortable. Your age at half speed,
                  doubling your lifespan.
                </p>,
                <p>
                  You no longer require flowing blood to remain healthy, and are therefore immune to the Dying state.
                  You no longer age and can live forever if not killed.
                </p>,
              ]}
            />
          </Section>
          <Section header="Homeostasis" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Your body maintains optimum functionality, resisting and quickly recovering from anything that would
                  throw you off balance.
                </p>
              }
              ranks={[
                <p>
                  When you use the rest action in combat, you may use both the recover Metabolism option and the reduce
                  state intensity option simultaneously.
                </p>,
                <p>
                  When you use the rest action in combat, reduce the intensity of all states instead of just one. When
                  affected by any poison, toxin, disease, or drug, you may choose to be immune to it.
                </p>,
                <p>Any time a state is applied to you, you may choose to reduce the intensity of the state by 1.</p>,
              ]}
            />
          </Section>
          <Section header="Regneration" isInset>
            <SpecializationDescription
              intro={
                <p>
                  By subliming clotting factors, platelets, and blood transfusions into your hidden body, you can
                  transfuse them into your physical body to seal your wounds rapidly.
                </p>
              }
              ranks={[
                <p>Remove 1 point of Stress from every Physical Metabolism every hour.</p>,
                <p>Remove 1 point of Stress from every Physical Metabolism every minute.</p>,
                <p>Whenever you use the Rest action, heal 1 stress on all Physical Metabolisms.</p>,
              ]}
            />
          </Section>
          <Section header="Stamina" isInset>
            <SpecializationDescription
              intro={<p>You can exert yourself for much longer durations than the body is normally capable.</p>}
              ranks={[
                <p>
                  When you regenerate half of your spent Metabolism points between combat rounds , you regain an
                  additional number of points equal to your rank in this Specialization.
                </p>,
                <p>
                  Your requirement for sleep to be fully rested is reduced by a number of hours equal to your Rest
                  bonus.
                </p>,
                <p>
                  Any challenge that would be high Effort due to physical exertion is instead default Effort. The only
                  limit on how long you can continue a physical activity is your need for sleep.
                </p>,
              ]}
            />
          </Section>
          {/* <Section header="TODO" isInset></Section> */}
          {/* <Section header="TODO" isInset></Section> */}
          {/* <Section header="TODO" isInset></Section> */}
        </Section>
        <Break />
        <Section header="Abjuration Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the entanglement of Flight + Self allows you to heighten and customize the
                capabilities of the Ward cascade event.
              </p>
            }
            styleName="Abjuration"
            rank1Bonus="You can induce the Ward cascade event."
            associatedAction="inducing Ward events"
          />

          <Section header="Combat Shielding" isClassified>
            <SpecializationDescription
              intro={<p>You use Ward tactically to protect your allies.</p>}
              ranks={[
                <p>
                  Your Wards do not need to be straight lines, and can follow any path of you choose as long as the
                  total length is still under the Length metric. You can freely traverse and attack through any ward you
                  have created.
                </p>,
                <p>
                  Your wards are selective, it blocks attacks from your enemies but does not block attacks made by your
                  allies. Despite this, your wards remain untraversable to anyone but you.
                </p>,
                <p>
                  You and any ally standing adjacent to the path of your ward when you create it is protected by a
                  subtly shimmering shield that clings to their body. Any Threat dealt to someone protected this way is
                  dealt to their shield instead of them. Each shield dissipates after it absorbs an amount of Threat
                  equal to the Durability used to induce the event. Any further Threat then passes through normally.
                </p>,
              ]}
            />
          </Section>
          <Section header="Filter" isClassified>
            <SpecializationDescription
              intro={<p>When using the Ward event you may add filtering properties to the barrier you create. </p>}
              ranks={[
                <>
                  <p>
                    When creating a Ward, you may reduce its Durability by 1 to add a filter to it. You may do this
                    multiple times as long as you maintain at least 1 point of Durability. For each filter you add,
                    choose a single object or entity. The chosen targets are either the only thing the barrier blocks,
                    or the only thing that the barrier allows to pass.
                  </p>
                  <p>
                    Things that can pass through the filter can only do so while moving at speeds slower than 1 space
                    per round, preventing any attacks from passing through. Filters cannot cause damage, if a blocked
                    object is inside an object that can pass, then both objects are blocked.
                  </p>
                </>,
                <>
                  <p>
                    The targets of filters can now be a specific class of objects, type of entity, or homogeneous
                    substance. For example, you could make selections such as metallic objects, humans, or oxygen.
                  </p>
                  <p>
                    Blocked objects inside allowed objects can now harmlessly pass through each other if you want them
                    to. For example, you could create a filter that blocks a toxin but allows humans in order to safely
                    purge the toxin from those that cross the barrier.
                  </p>
                </>,
                <p>
                  You can now add filters that work on a case by case basis. When you do, you become aware of anything
                  that comes within a meter of the barrier no matter where you are, and may then choose whether to allow
                  it or block it. If it returns later, you may change your previous choice, allowing you to trap
                  something.
                </p>,
              ]}
            />
          </Section>
          <Section header="Repelling Ward" isClassified>
            <SpecializationDescription
              intro={<p>You can create airtight Wards that push others away.</p>}
              ranks={[
                <p>
                  Instead of straight lines, you may create spherical wards centered on yourself with a diameter of up
                  to Length. The affected area must not include anything unwilling to be enclosed by it, or the event
                  fails. The sphere is airtight, preventing liquids or gasses from entering or exiting.
                </p>,
                <p>
                  When you create a Spherical ward, it can now include unwilling occupants and you can now place it
                  freely as long as you are inside or adjacent to it. You may also select any number of entities or
                  objects that are expelled from the warded area. These targets are forcibly pushed into the nearest
                  empty space outside of the sphere.
                </p>,
                <p>
                  A spherical ward my now have a radius of up to Length instead of a diameter, doubling its maximum
                  size. If the ward is centered on you when you create it, you can choose for it to move with you when
                  you move or to remain stationary. For each person, or object of greater mass than a person, that would
                  be forced to move by the ward moving with you, the terrain difficulty of every space you move into is
                  increased by 1.
                </p>,
              ]}
            />
          </Section>
          <Section header="Retrogradient" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can create a defensive field around yourself when attacked. Ranged attacks and other projectiles
                  must move further through this field than other attacks, greatly reducing their damage.
                </p>
              }
              ranks={[
                <p>
                  Instead of reacting normally to an incoming attack, you may use a special Retrogradient reaction to
                  briefly project a defensive field around yourself. When you do, treat it the same as the original
                  reaction but replace Flight with Focus and if the attack was ranged, reduce the Threat it dealt by 1.
                </p>,
                <p>
                  When reacting with Retrogradient, reduce incoming Threat by 3 points from Ranged attacks, 2 points
                  from melee attacks, or 1 point from unarmed attacks.
                </p>,
                <p>
                  You can maintain the concentration needed to use Retrogradient while still defending yourself
                  normally. You can now add Focus to the reaction's Challenge without removing Flight from it.
                </p>,
              ]}
            />
          </Section>
          <Section header="Subtle Ward" isClassified>
            <SpecializationDescription
              intro={<p>You can create Wards that are effective without people being aware of them.</p>}
              ranks={[
                <p>
                  You can choose if each Ward you make is opaque, translucent, or invisible. If an invisible ward has
                  filters added to it by the Filter specialization, unblocked targets can pass through at full running
                  speed and doing so is imperceptible.
                </p>,
                <p>
                  You can induce Ward as a basic action instead of a full action. You may create a ward subtly
                  preventing witnesses from knowing you did anything.
                </p>,
                <p>
                  You may induce an alternate version of Ward that acts primarily mentally. When you do, the ward does
                  not actually physically block anything. Instead, anyone that comes within Length of the ward becomes
                  stricken with an inexplicable anxiety and fear of approaching closer, even if they can't actually
                  perceive the ward. No one will willingly come closer to the ward outside of a life or death scenario
                  such as combat. In combat, to traverse the ward someone must make a Willpower reaction that is greater
                  than the Durability of the Ward.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sustain Ward" isClassified>
            <SpecializationDescription
              intro={<p>Your Ward events last longer and are more durable.</p>}
              ranks={[
                <p>Replace the Duration metric of your Ward event with “Duration: 1 minute, minimum = bonus”.</p>,
                <p>Replace the Durability metric of your Ward event with “Durability: 2 Threat, minimum = bonus”.</p>,
                <p>
                  Replace the Duration metric of your Ward event with “Duration: 1 hour, minimum = bonus”. Replace the
                  Durability metric of your Ward event with “Durability: 3 Threat, minimum = bonus”.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />
      <Section header="Flight + Near">
        <p>
          Mastering this Entanglement is mastering motion itself. It boosts your melee defense, speed, and can even
          allow you to move things with your mind. It can increase the bonuses for the Melee Defense or Move actions, or
          the Telekinesis cascade event.
        </p>
        <EntanglementDescription
          physMet={<Metabolism flight />}
          hidMet={<Metabolism near />}
          esoStyle={"Gravitonertia"}
          intStyle={"Mobile"}
        />
        <EventDescription
          eventName="Telekinesis"
          intro="You focus your mind on an unattended non-living object, causing it to move at your command."
          inductionTime="Full Action"
          linkTarget={linkMap.GravitonertiaStyle}
          metrics={[
            { name: "Mass", value: "1 kilogram" },
            { name: "Range", value: "1 meter" },
            { name: "Targets", value: "1 per 3" },
          ]}
          description={
            <p>
              Choose a number of objects equal to Targets within Range that each weigh less than Mass. Each object moves
              from it its current location to a new location within Range of its starting point.
            </p>
          }
        />
        <Break />
        <Section header="Mobile Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Flight + Near your skill with melee defense and rapid
                mobility.
              </p>
            }
            styleName="Mobile"
            rank1Bonus="Your mobility allows you to control how you engage in melee combat and traverse any obstacle. In addition to the free meter of movement included in each of your actions, you can also move one additional meter for free at any time during your turn. Additionally, obstacles than can be traversed by climbing, balancing, swimming, tumbling, or free running cannot increase the Risk level or add additional goals to our Move actions, however they remain difficult terrain."
            associatedAction="Melee Defense reactions"
          />
          <Section header="Charge" isInset>
            <SpecializationDescription
              intro={<p>You can effectively apply your movement in combat to your attacks and defenses.</p>}
              ranks={[
                <p>
                  Add your Move action bonus to the amount of free movement you can take when you use this movement
                  before an attack action on your turn.
                </p>,
                <p>
                  Once per turn, you can charge by taking both the Move action and then a Melee or Unarmed Attack action
                  as if they were a single action. The attack action does not provide free movement.
                </p>,
                <p>
                  After you charge and until your next turn, you may add your Move action bonus to the Progress created
                  to react to the next attack targeting you.
                </p>,
              ]}
            />
          </Section>
          <Section header="Evasion" isInset>
            <SpecializationDescription
              intro={<p>You have a strong sense for where attacks will land and how to avoid them.</p>}
              ranks={[
                <p>When reacting to an attack, if you reduce the threat dealt to 1, it is instead reduced to 0.</p>,
                <p>
                  Gain the trait Evasive. It is relevant any time you use the Melee Defense or Unarmed Defense
                  reactions, or the Move action.
                </p>,
                <p>
                  The free movement you get when using a reaction in response to any attack increases by 1 meter. This
                  stacks with any other increase to free movement.
                </p>,
              ]}
            />
          </Section>
          <Section header="Speed" isInset>
            <SpecializationDescription
              intro={<p>You can run much faster than before.</p>}
              ranks={[
                <p>The free movement you get when taking a basic action on your turn increases by 1 meter.</p>,
                <p>When you use the Move action, double the amount of Progress created in the Challenge.</p>,
                <p>When you use the Move action, treat your Move action bonus as if it were doubled.</p>,
              ]}
            />
          </Section>
          <Section header="Traversal" isInset>
            <SpecializationDescription
              intro={<p>Obstacles and terrain no longer hinder your movement.</p>}
              ranks={[
                <p>You can treat any terrain with a difficulty less than Move action bonus as normal terrain.</p>,
                <p>You can freely pass through enemy spaces, but you cannot end an action in them.</p>,
                <p>
                  You can traverse vertical walls as if they were normal terrain up to a height equal to your Near score
                  in meters. You must end the action on normal flat terrain.
                </p>,
              ]}
            />
          </Section>
          {/* <Section header="TODO" isInset></Section> */}
          {/* <Section header="TODO" isInset></Section> */}
        </Section>
        <Break />
        <Section header="Gravitonertia Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the entanglement of Flight + Near allows you to control the fundamental forces
                behind gravity and motion. This ability is expressed primarily via the Telekinesis cascade event.
              </p>
            }
            styleName="Gravitonertia"
            rank1Bonus="You can induce the Telekinesis cascade event."
            associatedAction="inducing Telekinesis events"
          />
          <Section header="Alter Mass" isClassified>
            <SpecializationDescription
              intro={
                <p>Your Telekinesis events can increase or decrease the mass of objects instead of moving them.</p>
              }
              ranks={[
                <p>
                  After moving an object with Telekinesis, you may spend a point of Near to double the object's weight.
                  You may do this a number of times equal to your rank in this Specialization.
                </p>,
                <p>
                  The Mass metric of Telekinesis is replaced with "1 kilogram, minimum = Bonus". Each time you would
                  double an object's weight you may choose to reduce its weight by half instead.
                </p>,
                <p>
                  When you reduce an object's weight, you may do so immediately before moving it instead of after. This
                  allows you to reduce the weight of an object and then move it telekinetically if the new weight is
                  less than the Mass limit.
                </p>,
              ]}
            />
          </Section>
          <Section header="Remote Interaction" isClassified>
            <SpecializationDescription
              intro={<p>Your can telekinetically interact with objects and enemies as if they were within reach.</p>}
              ranks={[
                <p>
                  The Interact action no longer requires a free hand and you can use it on any object weighing under 1
                  kilogram that is within a number of meters equal to your Near score.
                </p>,
                <p>
                  As a basic action, you can shove or grab any target within a number of meters equal to your Near
                  score. A shoved target is pushed 1 meter in any direction. A grabbed target gains the grappled state
                  with intensity 1, or has this intensity increased by 1, as if you were adjacent to them.
                </p>,
                <p>
                  Your reach with melee and unarmed attacks inreases by 1 meter. You can use the move action to force a
                  grappled target to move you do not need to move with them, but doing so increases the terrain
                  difficulty of each space moved by an additional 1.
                </p>,
              ]}
            />
          </Section>
          <Section header="Kinetic Attack" isClassified>
            <SpecializationDescription
              intro={<p>You can telekinetically throw small objects with bullet-like force.</p>}
              ranks={[
                <p>
                  You can induce Telekinesis as an attack action to violently launch a tiny unattended object with
                  bullet-like force. When you do so, the Mass metric measures the number of points of Threat this
                  projectile deals instead of the number of kilograms it can lift. One target within Range is dealt this
                  amount of Threat. When you do this as an attack action, any other metrics and capabilities of
                  Telekinesis are not available.
                </p>,
                <p>
                  You can induce Telekinesis with its standard metrics and capabilities as a basic action. The Range
                  metric, for both the attack or standard version, is replaced with “2 meters”.
                </p>,
                <p>
                  When you induce Telekinesis as an attack action, you can now use the Targets metric. Each Target is
                  dealt the same amount of Threat. You may select the same target multiple times, dealing this amount of
                  Threat to them each time.
                </p>,
              ]}
            />
          </Section>
          <Section header="Levitation" isClassified>
            <SpecializationDescription
              intro={<p>You can lift yourself or others off the ground with your mind.</p>}
              ranks={[
                <p>
                  You can choose to target yourself with Telekinesis instead of an object in order to levitate. When you
                  do, you rise off the ground by Range and stay there for a minute. No other metrics or effects can be
                  used when you induce the event this way. At the start of each of your turns, you may ascend or descend
                  by Range again. Other than ascending or descending, you cannot move while in the air unless you are
                  next to a surface you can push yourself along on, such as a ceiling or wall. Moving this way requires
                  the Move action, but each meter moved has a Difficulty of 2.
                </p>,
                <p>
                  You can choose to target another person within Range with Telekinesis to levitate them in the same way
                  you levitate yourself. You can move the target up or down at the start of your turn as you could
                  yourself. If the target is unwilling to be levitated, they can make a Willpower reaction. If they beat
                  or tie the total amount of Progress used to induce the event, it has no effect.
                </p>,
                <p>
                  When you raise or lower a levitated target at the start of your turn, you may also move it
                  horizontally by Range. When you use Telekinesis to levitate someone, you can now use the Targets
                  metric, levitating each target in the same manner.
                </p>,
              ]}
            />
          </Section>
          {/* <Section header="TODO" isClassified></Section> */}
          {/* <Section header="TODO" isClassified></Section> */}
          {/* <Section header="TODO" isClassified></Section> */}
        </Section>
      </Section>

      <Break page />
      <Section header="Flight + Far">
        <p>
          Mastering this Entanglement grants one lightning fast wits, reflexes and predictive power, or the ability to
          create areas that deny others these faculties. It can increase the bonuses for Ranged Defense reactions, the
          Hide action, or the Field cascade event.
        </p>

        <EntanglementDescription
          physMet={<Metabolism flight />}
          hidMet={<Metabolism far />}
          esoStyle={"Pneumaplegia"}
          intStyle={"Quick"}
        />
        <EventDescription
          eventName="Field"
          intro="You create a region of space that enhances or disrupts the hidden body connection, disorienting your foes or hastening your allies."
          inductionTime="Full Action"
          linkTarget={linkMap.PneumaplegiaStyle}
          metrics={[
            { name: "Area", value: "1 square meter, minimum = Bonus" },
            { name: "Duration", value: "1 round, minimum = Bonus" },
            { name: "Intensity", value: "1 point" },
          ]}
          description={
            <>
              <p>
                Select a number of contiguous 1 meter spaces equal to Area. These spaces fill with a faint haze or other
                subtle but reliably noticeable visual effect and remain affected for the Duration.
              </p>
              <p>
                Decide if the affected area inhibits or aids movement. If it inhibits, any time someone starts a turn
                inside it, they lose a number of Metabolism points equal to Intensity. Otherwise they gain that number
                of Metabolism points. The points are lost or gained from whatever combination of Metabolisms the
                affected target chooses.
              </p>
              <p>
                If you already have an ongoing field from a previous use of this event when you induce it, and the new
                field is contiguous with the old field, then they merge into a single field. The properties of the
                combined field all match the whatever metrics were applied to it the most recent time it was induced. If
                the new field is not connected to the old one it replaces the old one.
              </p>
            </>
          }
        />
        <Break />
        <Section header="Quick Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Flight + Far focuses on accelerating your wits and predictive
                capabilities.
              </p>
            }
            styleName="Quick"
            rank1Bonus="Your reflexively sense and respond to inbound dangers before they happen, making you less dependent on cover to survive a firefight. When you use the free movement from a defense reaction, the attack that triggered this reaction is treated as if you had partial cover. "
            associatedAction="Ranged Defense reactions"
          />

          <Section header="Danger Sense" isInset>
            <SpecializationDescription
              intro={<p>You can sense and predict incoming threats.</p>}
              ranks={[
                <p>
                  In a reaction to a ranged attack, the first point of Far you spend produces an extra amount of
                  Progress equal to your rank in this specialization.
                </p>,
                <p>
                  If you use the free movement granted by a reaction to an attack to move into cover, the attack that
                  triggered the reaction has disadvantage.
                </p>,
                <p>Increase your Unarmed, Melee, and Ranged Defense bonuses by 1.</p>,
              ]}
            />
          </Section>
          <Section header="Multitask" isInset>
            <SpecializationDescription
              intro={
                <p>
                  By taking advantage of the conscious mutability of the hidden body, the simple brain-state mirror it
                  keeps can be given extra cognitive resources, giving one the equivalent to a second brain and a great
                  ability to parallelize tasks.
                </p>
              }
              ranks={[
                <p>
                  You can focus on multiple tasks at one time. The exact limits of this are up to the GM, but it
                  includes making multiple challenges simultaneously, doing unrelated physical tasks with both hands, or
                  participating in combat while solving another problem.
                </p>,
                <p>
                  As a full action, you can focus on all your attackers at once. After doing so, resolve a challenge as
                  if you were reacting to an attack. Until your next turn you may use the results of this challenge to
                  react to all attackers.
                </p>,
                <p>
                  Any time you use a reaction against being attacked, you may forgo the free meter of movement and
                  instead make a simultaneous attack as a free action. You still must resolve this attack as a normal
                  Challenge.
                </p>,
              ]}
            />
          </Section>
          <Section header="Precognition" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Your predictive abilities are so rapid and accurate that it seems like you can see the near future.
                </p>
              }
              ranks={[
                <p>
                  You can always act in a surprise round and enemies cannot get advantage by attacking you while
                  unaware.
                </p>,
                <p>
                  On your turn, you can designate an enemy to focus your predictive skills on. Until you choose a new
                  enemy, you can ask the GM what this target will do with their next action and your Reaction to any
                  attack this target makes has advantage.
                </p>,
                <p>
                  Outside of combat, you have a vague sense of what might happen in the next few minutes. Once per
                  scene, you can ask the GM for information on what is about to happen. How much information you are
                  given is up to the GM, but the information is accurate until the circumstances change significantly.
                </p>,
              ]}
            />
          </Section>
          <Section header="Priority" isInset>
            <SpecializationDescription
              intro={<p>Your fast reactions let you take more turns at more advantageous times in combat.</p>}
              ranks={[
                <p>
                  When combat starts, you may choose to have a secondary turn. Make two separate challenges to determine
                  the place of your two turns in the initiative order. The turn that occurs later in the order is the
                  secondary turn. The secondary turn does not trigger anything that would normally happen at the start
                  of your turn. During the secondary turn, you can only take one basic action.
                </p>,
                <p>
                  When determining the initiative order of your two turns, you may determine your primary turn's place
                  normally and then decide when the secondary turn occurs after seeing everyone else's turn order. The
                  secondary turn can be used to take a single basic or attack action.
                </p>,
                <p>
                  Determining initiative does not require a Challenge for you. Decide when your primary and secondary
                  turns occur after the rest of initiative is determined.
                </p>,
              ]}
            />
          </Section>
          <Section header="Ranged Defense" topicKey="rangedDefenseSpecialization" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Your tactical predictions about where ranged threats are coming from greatly protect you from harm.
                </p>
              }
              ranks={[
                <p>
                  When reacting to a ranged attack, any cover within a meter of you is considered to be protecting you.
                </p>,
                <p>
                  Gain the trait Ranged Tactics. This trait is relevant any time you are reacting to a ranged attack and
                  while you're determining initiative.
                </p>,
                <p>Increase your Ranged Defense bonus by 1.</p>,
              ]}
            />
          </Section>
          {/* <Section header="TODO" isInset></Section> */}
        </Section>
        <Break />
        <Section header="Pneumaplegia Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the entanglement of Flight + Far is the discipline of “frozen breath” or
                “paralyzed air” which allows you to modify the effects of Field events.
              </p>
            }
            styleName="Pneumaplegia"
            rank1Bonus="You can induce the Field cascade event."
            associatedAction="inducing Field events"
          />

          <Section header="Concentrate Field" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can increase the strength of a field by concentrating it into a smaller area, or conversely make
                  it larger and more diffuse.
                </p>
              }
              ranks={[
                <p>
                  Each time you spend Progress to increase the Area metric of your Field event, you may instead increase
                  the value of the Intensity metric. This allows you to increase Intensity above its normal limit. For
                  example, if your maximum number of increases was 3 and you increased both Area and Intensity the
                  maximum 3 times, you could treat the event as if you had increased Intensity 6 times and left Area at
                  the minimum.
                </p>,
                <p>You can also do the opposite of Rank 1, sacrificing Intensity to increase Area further.</p>,
                <p>
                  Any time you create a Field with that has an Intensity metric increased above your normal maximum,
                  either from this specialization or any other means such as from the Event Bandwidth specialization,
                  the field becomes extremely dense. A dense Fields greatly hinders movement, every space within it has
                  a terrain Difficulty equal to Intensity and it acts as cover with a value of 3 to any attacks that
                  pass through any part of it. They become increasingly opaque closer to the ground, suitible to hide
                  behind by crouching down.
                </p>,
              ]}
            />
          </Section>
          <Section header="Isolate Flow" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  Your field events last longer and can create spaces where time flows at a noticeably different pace,
                  isolating its occupants.
                </p>
              }
              ranks={[
                <p>Replace the Duration metric of your Field events with “Duration: 1 minute”.</p>,
                <>
                  <p>
                    You may induce an isolating version of Field where the Intensity metric costs 4 points of Progress
                    to increase instead of 1. When you do so, the area affected when inducing the event must include a
                    number of people exactly equal to Intensity. At this rank, you must be one of these people and the
                    others must all be willing.
                  </p>
                  <p>
                    The affected area and all its occupants are isolated from the flow of time and outside influences.
                    Time outside of the event appears to grind to a halt while it continues to flow inside it. For the
                    Duration, causality cannot cross the threshold of the event or interact with anyone inside it. No
                    beings, objects, gasses, signals, objects in hidden space, or anything else can cross the boundary.
                    Anyone inside the event can exit it, however doing so immediately ends the event completely.
                  </p>
                </>,
                <p>
                  Replace the Duration metric of your Field events with “Duration:1 hour”. The when you use the
                  isolating version of Field, the affected people inside it do not need to include you or be willing.
                </p>,
              ]}
            />
          </Section>
          <Section header="Halting Field" isClassified>
            <SpecializationDescription
              intro={<p>Your Field events can stop foes in their tracks.</p>}
              ranks={[
                <p>
                  For everyone inside one of your Fields with inhibiting effects, the terrain difficulty of every space
                  adjacent to the field is increased by the event's Intensity value.
                </p>,

                <p>
                  The terrain difficulty of every space inside one of your inhibiting Fields is increased by the event's
                  Intensity value.
                </p>,
                <p>
                  When someone enters one of your inhibiting Fields with a Intensity of 3 or greater, their turn ends
                  immediately.
                </p>,
              ]}
            />
          </Section>
          <Section header="Hastening Field" isClassified>
            <SpecializationDescription
              intro={<p>Your Field events can greatly speed the movements of those inside it.</p>}
              ranks={[
                <p>Your Field event is selective, you may choose who is affected by any effects of the Field.</p>,

                <p>
                  Metabolism points are now regained before every action taken inside the Field instead of before each
                  turn.
                </p>,
                <p>
                  When someone uses a Move action or the free movement of another action while inside any of your
                  fields, you may choose to allow them to instantly move to any space inside the event as if they were
                  adjacent.
                </p>,
              ]}
            />
          </Section>
          {/* <Section header="TODO" isClassified></Section> */}
          {/* <Section header="TODO" isClassified></Section> */}
          {/* <Section header="TODO" isClassified></Section> */}
        </Section>
      </Section>

      <Break page />
      <Section header="Focus + Self">
        <p>
          Mastering this Entanglement allows you to take charge of your instincts, the needs of your body, resist
          outside influence, or even fade out of physical space entirely. It can increase the bonuses for the Willpower
          Reaction, Push actions, or the Sublime cascade event.
        </p>
        <EntanglementDescription
          physMet={<Metabolism focus />}
          hidMet={<Metabolism self />}
          esoStyle={"Sublimation"}
          intStyle={"Confident"}
        />
        <EventDescription
          eventName="Sublime"
          intro="You still your mind, quiet the distractions of your body, open your senses to hidden space, and leave the physical world behind."
          inductionTime="1 minute"
          linkTarget={linkMap.SublimationStyle}
          metrics={[
            { name: "Depth", value: "1 minute" },
            { name: "Range", value: "1 meter" },
          ]}
          description={
            <>
              <p>
                Your hidden body fully separates from the physical world, leaving your unconscious physical body behind
                and giving you the Out of Body state. While in this state, you can phase through any object that has
                moved within an amount of time less than your current Depth.
              </p>
              <p>
                While your senses do not operate in hidden space, you are aware of the shape of physical objects within
                Range. If you have special senses from other Specializations, such as Chromaception, Detect Sensorium,
                Exoproprioception, Sense Waveform, or Tactical Awareness, you keep these senses while sublimed.
              </p>
              <p>
                To exit the hidden space and end the Out of Body state, you must return to your physical body and induce
                this event again, but no Challenge or Progress is required to do so.
              </p>
            </>
          }
        />
        <Break />
        <Section header="Confident Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Focus + Self helps you function in adverse situations, resist
                influence and dissociation, and when transcend the physical needs of the body.
              </p>
            }
            styleName="Confident"
            rank1Bonus="The maximum intensity of your cascade events is unlimited. When you use the Prime action, the Progress limits on the Prepared event are removed entirely instead of being doubled."
            associatedAction="Willpower reactions"
          />

          <Section header="Auto-integrity" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You have a stronger connection between your two bodies, protecting you from dissociation and making
                  cascade events less stressful.
                </p>
              }
              ranks={[
                <p>
                  You do not gain the Dissociated state if one Hidden Metabolism is disabled. However, if two of them
                  are, you experience the Dissociated state for both.
                </p>,
                <p>Any cascade event you can induce cannot have its effort level increased above default.</p>,
                <p>
                  You can not gain Dissociated states. However, if all three Hidden Metabolisms are disabled your
                  character still becomes permanently unplayable.
                </p>,
              ]}
            />
          </Section>
          <Section header="Determination" isInset>
            <SpecializationDescription
              intro={<p>You can push yourself to the limit harder and longer than others.</p>}
              ranks={[
                <p>
                  After using the Push action and still getting less Progress than desired, you may repeat the Push
                  action one additional time per rank you have in this Specialization. The results of each repetition
                  are applied to the original action.
                </p>,
                <p>
                  You can use the Push action as an inhale action or immediately before a Challenge outside of combat to
                  apply it to the following exhale action or Challenge. You must choose to do this before you start to
                  resolve the Challenge. If you do, this Push action causes 1 less Stress than normal.
                </p>,
                <p>
                  The first time you would use Push as an exhale action it does not consume the exhale action. If you
                  repeat the Push action after this, it consumes actions normally. Additionally, if your current Focus
                  maximum is 1 or you are in the Injured Focus state, you can still use Push as an exhale action as if
                  you took 1 point of Stress to do it but you instead take no Stress.
                </p>,
              ]}
            />
          </Section>
          <Section header="Event Bandwidth" isInset>
            <SpecializationDescription
              intro={<p>You can use pure willpower to induce cascade events with heightened intensity.</p>}
              ranks={[
                <p>
                  You can use the Push action to improve cascade events. When you do, each metric can be increased again
                  the same number of times it could normally be increased, effectively doubling the maximum range. For
                  example, if you could increase a metric up to 2 times when inducing an event, you could increase it up
                  to 2 additional times when Pushing the event.
                </p>,
                <p>
                  When inducing a cascade event, choose a single metric to increase once without spending any Progress
                  on it. You may do this again if you use the Push action on the event.
                </p>,
                <p>The maximum number of times you can increase the metrics of any cascade event is increased by 1.</p>,
              ]}
            />
          </Section>
          <Section header="Insulation" isInset>
            <SpecializationDescription
              intro={<p>You have created a buffer that protects your hidden body from harm and influence.</p>}
              ranks={[
                <p>
                  Your mind is protected from outside influence. You cannot unwillingly be the target of any effect that
                  reads, inhibits, detects, or influences your mind telepathically. When inside a naturally occuring
                  cascade event you can choose whether to ignore or experience its effects.
                </p>,
                <p>
                  You cannot be targeted by attacks or effects originating from hidden space unless your body is
                  currently sublimed into hidden space. You cannot be forced to enter or exit hidden space against your
                  will.
                </p>,
                <p>You are immune to the manipulate action.</p>,
              ]}
            />
          </Section>
          {/* <Section header="TODO" isInset></Section> */}
          {/* <Section header="TODO" isInset></Section> */}
          {/* <Section header="TODO" isInset></Section> */}
        </Section>
        <Break />
        <Section header="Sublimation Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the entanglement of Focus + Self grants additional capabilities to the Sublime
                cascade event.
              </p>
            }
            styleName="Sublimation"
            rank1Bonus="You can induce the Sublime cascade event."
            associatedAction="inducing Sublime events"
          />

          <Section header="Blink" isClassified>
            <SpecializationDescription
              intro={<p>You can rapidly enter hidden space and exit it somewhere else nearby.</p>}
              ranks={[
                <p>
                  The Range metric of your Sublime event increases to "2 meters". You can now induce a version of
                  Sublime as a basic action that causes you to teleport by forcing your body into hidden space and
                  instantly exiting it anywhere within Range. You cannot teleport through walls or obstacles.
                </p>,
                <p>
                  Increase the Range metric to "4 meters". If your physical body is already fully sublimed into hidden
                  space, you can use this version of Sublime to exit it anywhere within Range.
                </p>,
                <p>
                  Increase the Range metric to "6 meters". You can now teleport through anything that Depth would allow
                  you to phase through.
                </p>,
              ]}
            />
          </Section>
          <Section header="Deep Traversal" isClassified>
            <SpecializationDescription
              intro={<p>You can enter deeper reaches of hidden space allowing you to phase through more objects.</p>}
              ranks={[
                <p>Replace the Depth metric with “Depth: 1 hour”.</p>,
                <p>Replace the Depth metric with “Depth: 1 day”.</p>,
                <p>Replace the Depth metric with “Depth: 1 year”.</p>,
              ]}
            />
          </Section>
          <Section header="Nonlocality" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  Time and interconnection work differently in hidden space than our intuition of physical space would
                  expect. You can take advantage of this to travel great distances effortlessly.
                </p>
              }
              ranks={[
                <p>
                  You can ignore gravity while you are in hidden space, however any other person you have brought into
                  hidden space cannot.
                </p>,
                <>
                  <p>
                    While in hidden space, you can effortlessly cross physical space at rapid speeds. Outside of combat
                    this allows you to travel at rates up to 1000 kilometers per hour. Inside of combat, when you use
                    the Move action, you can travel to space you can sense for free. This does not affect the free
                    movement that comes with other actions.
                  </p>
                  <p>
                    Additionally, while you are in hidden space, your physical body enters a state of suspended
                    animation and does nor require sleep, water, food, or oxygen. This occurs regardless of whether your
                    physical body enters hidden space with you or if it is left behind in physical space.
                  </p>
                </>,
                <p>
                  While in hidden space, you can travel anywhere on the planet within an hour, or even drift to other
                  locations in the solar system within days. Be careful not to exit hidden space with your physical body
                  while in a lethal vacuum.
                </p>,
              ]}
            />
          </Section>
          <Section header="Storage" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  This lets you store physical objects in hidden space, rendering them invisible, weightless, and
                  intangible, and then retrieve them later when needed.
                </p>
              }
              ranks={[
                <p>
                  As a basic action, you can touch a single uncontested nonliving item causing it to vanish as it
                  sublimes into hidden space. At any later time, you use this action again to retrieve the item into the
                  position required for immediate use, for example, a weapon would appear in your hand or a garment
                  would appear already worn on your body. You can maintain as many stored items as you can fit in 1
                  cubic meter.
                </p>,
                <p>
                  You can now simultaneously store or retrieve a number of objects equal to your Sublime action bonus.
                  You can maintain as many stored items as you can fit in 2 cubic meters.
                </p>,
                <p>
                  Storing or retrieving an object is now a non-action. You can maintain as many stored items as you can
                  fit in 3 cubic meters.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sublime Body" isClassified>
            <SpecializationDescription
              intro={
                <p>You can bring your physical body with you when entering hidden space and eventually other people.</p>
              }
              ranks={[
                <p>
                  Your Sublime events now have the metric “Bodies: 1 per 4, minimum = 0”. At this rank, you can only
                  increase this metric to 1 and it can only be used to target yourself. This causes your physical body
                  vanish entirely from physical space. While your physical body is sublimed into hidden space in this
                  way, you can apply any of your Metabolisms to actions taken in hidden space and when you exit hidden
                  space later your body will reappear at the new location you traveled to while sublimed.
                </p>,
                <p>
                  You can now increase the Bodies metric up to your Sublime bonus and it can now also be used on any
                  willing participant that you touch. They can then move freely in hidden space, but can only exit when
                  you decide they do or they will exit naturally after an hour. All targets have the same Depth, Sensory
                  Range, and Blink Range.
                </p>,
                <p>
                  The Bodies metric can now target unwilling participants forcing them to enter hidden space. You must
                  remain in physical contact with anyone you attempt to do this to for the entire time it takes to
                  induce Sublime. To do this, you must give the target the Grappled state and maintain it until the
                  event is completed. When you do, you may choose to enter with them or send them alone. They can move
                  freely in hidden space, but can only exit when you decide they do or naturally after an hour.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sublime Combat" isClassified>
            <SpecializationDescription
              intro={<p>You have mastered the tactical capabilities of subliming your body.</p>}
              ranks={[
                <p>Inducing Sublime or exiting hidden space are now full actions.</p>,
                <p>
                  Inducing Sublime or exiting hidden space are now basic actions. If you exit hidden space, including by
                  using Blink Range, and then use an attack action in the same turn the target is surprised, granting
                  you advantage on the attack.
                </p>,
                <p>
                  You can now use Sublime as a reaction instead of using a normal reaction to being attacked to attempt
                  to phase out harm's way. The total Progress used to induce the event, plus your Sublime Action bonus,
                  reduces the Threat dealt by the attack in the same way a normal reaction would. After resolving the
                  reaction, if you increased the Bodies metric you can enter hidden space and can no longer be targeted
                  by physical attacks. Otherwise, you stay in place. Increase your Self score by 1.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>

      <Break page />
      <Section header="Focus + Near">
        <p>
          Mastering this Entanglement improves your ability to find and understand complex patterns, devise plans, and
          manipulate the strong force that binds atomic nuclei. It can increase the bonuses for the Intuition Reaction,
          the Improvise action, or the Transmute cascade event.
        </p>
        <EntanglementDescription
          physMet={<Metabolism focus />}
          hidMet={<Metabolism near />}
          esoStyle={"Chromodynamism"}
          intStyle={"Bright"}
        />
        <EventDescription
          eventName="Transmute"
          intro="You touch an unattended non-living object and alter its material properties."
          inductionTime="Full Action"
          linkTarget={linkMap.ChromodynamismStyle}
          metrics={[{ name: "Transmute Size", value: "1 centimeter, minimum = Bonus" }]}
          description={
            <>
              <p>
                An object that would fit within a diameter of Transmute Size, or a spherical portion of this size within
                a larger object, changes from one material to another. The shape and structure are unchanged. The new
                material must be a single homogeneous substance of the same state (solid, liquid, gas) as the original
                that will not react violently with itself or its context. Toxic substances are possible but dangerous
                because you must remain touching it and near any fumes or radiation for the duration of the
                transformation.
              </p>
              <p>
                For example, you could turn water into gasoline, or salt into iron, but not turn something into concrete
                (not homogeneous) or pure sodium (too reactive).
              </p>
            </>
          }
        />
        <Break />
        <Section header="Bright Style">
          <StyleDescription
            intro={
              <p>
                The intuitive style of the entanglement of Focus + Near boosts your ability to find patterns and
                understand the world.
              </p>
            }
            styleName="Bright"
            rank1Bonus="You can intuitively analyze and precisely enumerate even the hidden aspects of people and artifacts. You can know the exact Metabolism values of anyone you interact with and what Styles they have ranks in. When you encounter an ongoing cascade event, whether was induced by a person or is naturally occurring, you know precisely what its bounds and effects are. If you can spend a few minutes examining an object with artifact functions, you can know exactly what functions it has."
            associatedAction="Intuition reactions"
          />
          <Section header="Analyze Cascade" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You have insight into the fundamental principles underpinning cascade effect interactions between the
                  hidden and normal space. This knowledge allows you to discern details about cascade events, artifacts,
                  and entanglements.
                </p>
              }
              ranks={[
                <p>
                  You can tell if anyone you see has entanglements or is carrying objects with artifact functions. You
                  can spend an hour examining an artifact to identify and enumerate all of its functions, capabilities,
                  as well as its probable origin.
                </p>,
                <p>
                  You know the type, intensity, exact boundaries, cause, and general nature of any cascade event that
                  you are in or near for more than a minute. When an avatar, proxy, hidden body entity, or trans-stygian
                  entity, is within a number of meters equal to your Near score, you become aware of its presence,
                  position, and true nature.
                </p>,
                <p>
                  You can detect any objects that have been stored in hidden space by the Sublimation style, the
                  aperture( ) artifact function, or any other means. You can tell what Entanglement someone has the most
                  ranks and specializations in if you can see them for a minute.
                </p>,
              ]}
            />
          </Section>
          <Section header="Episemiotics" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Your hidden body can interface with others nearby, enabling you to understand communication on an
                  empathic level or even to steal memories from others.
                </p>
              }
              ranks={[
                <>
                  <p>
                    You can comprehend, but not speak, read, or write, the spoken language of anyone within{" "}
                    <Metabolism near /> meters of you.
                  </p>
                  <p>
                    Once per scene, you can touch a person to detect the presence of specific knowledge. The information
                    must be simple enough to describe in a single simple sentence. You learn if the target knows (or
                    falsely believes) the described information, but not the contents of this information.
                  </p>
                </>,
                <p>
                  You can speak, read, or write any language as fluently as anyone within <Metabolism near /> meters of
                  you. When you detect the presence of information in someone, you now also learn the contents of this
                  information.
                </p>,
                <p>
                  When you detect the presence of information in someone, you can now take a point of unavoidable Stress
                  to Focus in order to excise this memory. You learn the desired memory and the target permanently
                  forgets it.
                </p>,
              ]}
            />
          </Section>
          <Section header="Event Flexibility" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You deeply understand the fundamental mechanisms that allow cascade events to work, allowing you to
                  improve and modify their effects.
                </p>
              }
              ranks={[
                <p>
                  You can use the Improvise action to improve cascade events. This is always a basic action, regardless
                  of how long the event takes to induce. When you do, instead of adding advantage to the event choose a
                  single metric of the event to make flexible. During the Improvise action you can spend points from any
                  Metabolism, plus your Improvise bonus, to increase the flexible metric up to its normal limit. Then
                  during the action to induce the event, you can increase the metric further up to its limit again. For
                  example, if you can normally increase a metric up to 2 times, you could increase it 2 times using any
                  Metabolism during the Improvise action and then 2 more times as usual during the action to induce the
                  event.
                </p>,
                <p>
                  When inducing a cascade event, choose a single metric to increase once without spending any Progress
                  on it. You may do this twice if you use the Improvise action on the event.
                </p>,
                <p>The maximum number of times you can increase the metrics of any cascade event is increased by 1.</p>,
              ]}
            />
          </Section>
          <Section header="Exoproprioception" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Similar to natural proprioception that allows you to know the position and orientation of any part of
                  your body, exoproprioception allows you to sense the position and shape of any object within range,
                  but not visual or tactile information like color, texture, patterns, weight, or small details.
                </p>
              }
              ranks={[
                <p>
                  You have the sense of exoproprioception within a range of meters equal to your Near score. You can
                  navigate blindly at full speed.
                </p>,
                <p>
                  Your exoproprioception is now sensitive enough that you can blindly engage in combat without penalty
                  with anything in its range.
                </p>,
                <p>
                  Your exoproprioception allows you to sense and avoid attacks, you may use your Intuition reaction in
                  place of Unarmed, Melee, or Ranged reactions.
                </p>,
              ]}
            />
          </Section>
          <Section header="Group Mind" isInset>
            <SpecializationDescription
              intro={<p>You can share knowledge and experiences with others empathically, almost like a hive mind.</p>}
              ranks={[
                <>
                  <p>
                    By taking 1 unavoidable Stress to <Metabolism near /> as a non-action, you can create a group mind
                    containing yourself and a number of targets you can see up to your rank in this specialization. For
                    the rest of the scene, the group mind remains intact as long as each member can see at least one
                    other member. Members can leave as a non-action. Members of this group mind can communicate
                    empathically and experience any emotions experienced by the other members. Information sent this way
                    pre-semiotic and does not require a shared language, however it lacks the speed, precision, and
                    urgency of language.
                  </p>
                  <p>
                    If one member uses or becomes a Participant in a Telepathy event, all other members also become
                    Participants for free. Participants in these events no longer require a shared language.
                  </p>
                </>,
                <p>
                  All members of the group mind can use the Improvise action to help any other member as if they were
                  adjacent and cooperating. They can also use the Heal or Rest actions targeting any other member as if
                  they were targeting themself.
                </p>,
                <p>
                  While in the group mind, all members share any Traits that represent skills or knowledge. Any of these
                  Traits one member has, all other members also have.
                </p>,
              ]}
            />
          </Section>
          <Section header="Isolate Signal" isInset>
            <SpecializationDescription
              intro={
                <p>
                  You can intuitively sense mechanical, electrical, and biological oscillation, and therefore the clock
                  signal that synchronizes computer operations and neural resonance. With practice you can create a
                  counter oscillation that disrupts and prevents resonance and singals from propagating.
                </p>
              }
              ranks={[
                <p>
                  As a basic action, you take a moment to open your senses to normally impreceptible rhythms within a
                  range of your Near score. You become aware of the presence, location, and complexity of all nervous
                  systems more complex than an insect and all devices capable of basic computing or timekeeping. A
                  device must be fully unpowered, not idling or on standby, to remain undetected. You can maintain this
                  awareness for a minute.
                </p>,
                <p>
                  As a basic action, select a number, up to your Near score, of devices you can sense the rhythm of.
                  These devices crash and become disabled. You choose if this is permanent or if the device can be
                  restarted.
                </p>,
                <p>
                  As a basic action that causes a point of unavoidable Stress to Near, you prevent oscillatory systems
                  from resonating with others within a range of you equal to your Near score. This prevents all humans
                  other than you from comprehending or creating language while they remain in range. It also prevents
                  any any device in range from transmitting or receiving a wired or wireless signal. This effect lasts
                  for up to an hour.
                </p>,
              ]}
            />
          </Section>
        </Section>
        <Break />
        <Section header="Chromodynamism Style">
          <StyleDescription
            intro={
              <p>
                The esoteric style of the entanglement of Focus + Near allows you to control the strong fundamental
                force that binds atomic nuclei. This capability is primarily expressed through the Transmute cascade
                event.
              </p>
            }
            styleName="Chromodynamism"
            rank1Bonus="You can induce the Transmute cascade event."
            associatedAction="inducing Transmute events"
          />
          <Section header="Condense Matter" isClassified>
            <SpecializationDescription
              intro={<p>You can create solid objects out of thin air.</p>}
              ranks={[
                <p>
                  When you use the Transmute event, you can transform ambient gasses into any homogenous liquid or
                  solid.
                </p>,

                <p>
                  When you use the Transmute event, you can skim the virtual particles out of an absolute vacuum in
                  order to transform it into any homogeneous solid, liquid, or gas. Fluids created this way immediately
                  disperse if they are not contained in some way.
                </p>,
                <p>
                  When you use the Transmute event, you can choose to completely destroy the affected area instead of
                  transforming it.
                </p>,
              ]}
            />
          </Section>
          <Section header="Entropic Combat" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can decay and destabilize living things at an atomic level. Humans thus afflicted experience
                  internal hemorrhaging, abraded flesh, and decaying bones.
                </p>
              }
              ranks={[
                <p>
                  You can make an Entropic Attack. As an attack action using Focus + Near, you touch a target which can
                  react using Flight + Near. If even a single point of Progress isn’t blocked by the reaction, the
                  attack has full effect. It does no damage immediately, but the target is afflicted for a duration
                  equal to your Transmute bonus. Before metabolisms refresh at the end of each round, including the
                  round this attack was done, the target takes a point of unavoidable Stress to all uninjured physical
                  metabolisms. The remaining duration then decreases by one. The effect ends when the duration reaches 0
                  or you dismiss it as a non-action. A currently affected target cannot be healed or affected by more
                  than a single entropic attack at once. At the end of combat, an affected target can catch their breath
                  and move carefully in order to ignore any remaining duration.
                </p>,

                <p>Your Entropic Attack no longer requires touch and has a range equal to your Transmute bonus.</p>,
                <p>
                  Your Entropic Attack deals a point of Stress to all physical metabolisms immediately upon being
                  applied.
                </p>,
              ]}
            />
          </Section>
          <Section header="Composite" isClassified>
            <SpecializationDescription
              intro={<p>You can transmute things into more complex materials.</p>}
              ranks={[
                <p>
                  When you use Transmute, the transformed area can include up to three crudely arranged different
                  homogenous materials.
                </p>,

                <p>
                  Materials transmuted can now include multiple complex composite substances in both their original and
                  resulting material. For example, you could turn laminated wood into surface-hardened metal alloys.
                </p>,
                <p>
                  If you spend an hour inducing Transmute, you can turn any material into any other material, including
                  reactive and hazardous ones.
                </p>,
              ]}
            />
          </Section>
          <Section header="Reshape" isClassified>
            <SpecializationDescription
              intro={<p>You can sculpt materials and transmute larger objects.</p>}
              ranks={[
                <p>
                  Your Transmute events gain the metric ”Reshape Size: 1 centimeter, minimum = Bonus”. You can instantly
                  sculpt everything within a diameter of Reshape Size into any shape with features no smaller than a
                  centimeter. Both Transmute Size and Reshape Size have the same center.
                </p>,

                <p>
                  Your Transmute Size and Reshape Size metrics are now radiuses instead of diameters, doubling their
                  size. Reshaped materials can now include small features, textures, and sharp edges.
                </p>,
                <p>
                  You have enough control over the area inside Reshape Size to create interlocking or moving parts. If
                  you also have ranks in Composite, you could plausibly create any functional machine that you know how
                  to create by mundane means. For example, if you had the Trait Mechanic you could turn a block of wood
                  into a functional engine
                </p>,
              ]}
            />
          </Section>
          {/* <Section header="TODO" isClassified></Section> */}
          {/* <Section header="TODO" isClassified></Section> */}
        </Section>
      </Section>

      <Break page />
      <Section header="Focus + Far">
        <p>
          Mastering this Entanglement sharpens your senses, alertness, social modeling, and can even allow you to
          directly link to other minds or sense things remotely.
        </p>

        <EntanglementDescription
          physMet={<Metabolism focus />}
          hidMet={<Metabolism far />}
          esoStyle={"Telethesia"}
          intStyle={"Alert"}
        />
        <EventDescription
          eventName="Telepathy"
          intro="The diffuse bounds of your hidden body reach out over a distance to sense and interface with other minds."
          inductionTime="Full Action"
          linkTarget={linkMap.ChromodynamismStyle}
          metrics={[
            { name: "Range", value: " 3x, minimum = 1 meter" },
            { name: "Participants", value: "1 Target" },
          ]}
          description={
            <>
              <p>
                Select a number of willing Participants within Range. For the rest of the scene, you and all
                participants can communicate telepathically. This communication is undetectable to outsiders.
              </p>
              <p>
                Telepathic communication occurs at a slightly faster speed and bandwidth than normal speech, but still
                requires a shared language.
              </p>
              <p>You can induce this event subtly, preventing any witnesses from knowing anything happened.</p>
            </>
          }
        />
        <Break />
        <Section header="Alert Style">
          <StyleDescription
            intro={
              <p>The intuitive style of the entanglement of Focus + Far focuses on sensory and social awareness.</p>
            }
            styleName="Alert"
            rank1Bonus="Enemies cannot surprise or hide from you. You can act normally in the first round of combat when you are ambushed and you ignore the Hidden state on any enemies that have it. "
            associatedAction="Intuition reactions"
          />
          <Section header="Cold Reading" isInset>
            <SpecializationDescription
              intro={<p>You can read people like a book with a single glance.</p>}
              ranks={[
                <p>
                  When interacting with someone you always know what their true opinion of you is or what their current
                  intent is.
                </p>,
                <p>
                  You always know immediately if someone is lying, whether directly or by omission, or attempting to
                  deceive you in any other way.
                </p>,
                <p>
                  Once per turn, you may ask the GM what action a single target is going to take on their next turn.
                  This prediction is accurate unless the combat situation changes greatly before then.
                </p>,
              ]}
            />
          </Section>
          <Section header="Investigation" isInset>
            <SpecializationDescription
              intro={<p>You can get to the bottom of any mystery.</p>}
              ranks={[
                <p>
                  Once per session, when you have enough downtime to research a topic, you may ask the GM any one
                  question that you could plausibly have found the answer to in this time. The GM must answer correctly.
                </p>,
                <p>When talking with someone else, you can always tell if they know something you want to know.</p>,
                <p>
                  Once per session, you can find a clue towards any plot. This clue is specific to the current context
                  and your location. It may not explain the bigger picture, but it will always guide you to what you
                  need to do next.
                </p>,
              ]}
            />
          </Section>
          <Section header="Sharp Senses" isInset>
            <SpecializationDescription
              intro={<p>This specialization boosts the power of your existing senses to incredible levels.</p>}
              ranks={[
                <p>
                  You can read the lips of anyone you can see. You can understand small print and whispers within a
                  number of meters equal to your Far score multiplied by your rank in this entanglement.
                </p>,
                <p>You can track someone by scent alone. Enemies cannot approach you via stealth.</p>,
                <p>
                  On any challenge that primarily determines if you notice something, you automatically succeed without
                  needing to resolve a Challenge.
                </p>,
              ]}
            />
          </Section>
          <Section header="Tactical Awareness" isInset>
            <SpecializationDescription
              intro={
                <p>
                  This specialization ensures that you are always instinctively aware of all of the details about your
                  surroundings, even in chaotic situations.
                </p>
              }
              ranks={[
                <p>
                  You always know the location of any enemy in combat. They cannot sneak away from you or hide their
                  position.
                </p>,
                <p>
                  You can discern the exact current and maximum metabolism values of anyone you can see. You have an
                  instinctive awareness of combat situations and immediately know if an enemy has gotten behind the
                  cover of you or an ally, even if you cannot otherwise perceive the enemy.
                </p>,
                <p>
                  Any time an enemy gets behind your cover, you can instantly make an attack as a free action if they
                  are within range of a ranged weapon in your hand.
                </p>,
              ]}
            />
          </Section>
          <Section header="Chromaception" isInset>
            <SpecializationDescription
              intro={
                <p>
                  The “sixth sense” of chromaception is minimally present in all people, but you've refined it into 360°
                  situational awareness of the chromodynamic wakes that physical objects impart on hidden space.
                </p>
              }
              ranks={[
                <p>
                  You gain chromaception within a number of meters equal to your Far score. This sense can detect the
                  rough shape and motion of everything in physical or hidden space, regardless of circumstances, but it
                  cannot discern texture, color, or small shapes.
                </p>,
                <p>
                  You can sense the position of everything in range of your chromaception, regardless of blocked lines
                  of sight. At the start of combat, you know the precise location of all enemies in range, even if they
                  are completely hidden. However, rapid motion frustrates this sense and enemies can still hide from you
                  after combat begins.
                </p>,
                <p>
                  You can sense through walls and other obstacles within the range of your chromaception. If you take a
                  full minute to focus, you can discern smaller details this way enabling reading and sensing inside of
                  objects.
                </p>,
              ]}
            />
          </Section>
          <Section header="Detect Sensorium" isInset>
            <SpecializationDescription
              intro={
                <p>
                  Observation leaves an impression on the chromodynamic wakes of objects in hidden space. As your hidden
                  boy reaches out over distances it can detect these impressions, granting you an awareness of what
                  others perceive.
                </p>
              }
              ranks={[
                <p>You know at all times if anyone can currently see you.</p>,
                <p>
                  You know the presence and location of all active video cameras, audio recorders, motion sensors, or
                  similar devices within a number of meters equal to your Far score.
                </p>,
                <p>
                  You can tell at all times exactly what spaces are currently being observed and their likelihood of
                  being observed in the next round.
                </p>,
              ]}
            />
          </Section>
        </Section>
        <Break />
        <Section header="Telethesia Style">
          <p>
            The esoteric style of the entanglement of Focus + Far allows you to customize the Telepathy event’s
            capabilities within other minds or remote sensing.
          </p>

          <Section header="Clairvoyance" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can use Telepathy to sense what happens at distant locales regardless of any obstacles in the way.
                </p>
              }
              ranks={[
                <p>
                  Your Telepathy action bonus increases by 1. The Range metric of Telepathy improves to “10x, minimum =
                  10 meters”. When you induce Telepathy you may take a point of unavoidable Stress to Focus in order to
                  scry on a location. Select a location within Range that you have previously seen before. You and all
                  Participants can see what is happening at this location in your minds for the rest of the scene.
                </p>,
                <>
                  <p>
                    Telepathy gains the metric "Influence: 1, minimum = 0" if it didn't already have it. Influence has
                    multiple possible uses, you can only use one when you induce the event.
                  </p>
                  <p>
                    When you scry on a location you can choose to do so with retrocognition, observeing the location not
                    as it currently is, but rather as it was at a chosen moment in the past within a number of days
                    equal to Influence.
                  </p>
                </>,
                <p>
                  When you scry, you do not need to have seen the location before. You and all Participants gain all of
                  their senses at the location. You can observe the area retrocognitively at any chosen past moment
                  within a number of years equal to Influence.
                </p>,
              ]}
            />
          </Section>
          <Section header="Implant Thought" isClassified>
            <SpecializationDescription
              intro={
                <p>You instill a lasting influence into the minds of others, altering their behavior for a time.</p>
              }
              ranks={[
                <>
                  <p>
                    Telepathy gains the metric “Influence: 1 point” if it didn't already have it. Influence has multiple
                    possible uses, you can only use one when you induce the event.
                  </p>
                  <p>
                    You can use Influence to implant a thought into the mind of a target you can see in Range. When you
                    do, the target can make a default risk and effort Willpower reaction. If Influence is less than the
                    result of this reaction, the target is unaffected. Otherwise, you stimulate the target's brain to
                    continually release a single specific neurotransmitter causing a crude emotion or phantom sensation
                    of your choosing. The target continues to feel this strongly for the rest of the scene.
                  </p>
                </>,
                <p>
                  When you succeed at using Influence to implant a thought in a target, you can include a suggested
                  action or simple goal. An affected target feels a compulsion to take this action or pursue this goal.
                  This effect remains in place for the rest of the scene and then continues for a number of hours equal
                  to the sum of the Influence and Participants metrics used to induce the event. Any time the target
                  perceives an opportunity to follow your suggestion they may make a default risk and effort Willpower
                  reaction. If they do not, or if Influence is lower than the result of this reaction, then they must
                  follow the suggestion. Each time the target successfully resists and avoids following the compulsion,
                  reduce the Influence level by 1 until it reaches 0 and the target is unaffected.
                </p>,
                <>
                  <p>
                    When you succeed at using Influence to implant a suggestion into a target, this suggestion now lasts
                    for a number of days equal to Influence plus Participants instead of hours.
                  </p>
                  <p>
                    Alternatively, when you succeed you can choose to implant a false memory into the target instead of
                    a suggestion. As long as this memory is plausible, the target believes it permanently until it is
                    proven false.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Mind Control" isClassified>
            <SpecializationDescription
              intro={<p>You can seize control over simpler nervous systems.</p>}
              ranks={[
                <>
                  <p>
                    Telepathy gains the metric "Influence: 1, minimum = 0" if it didn't already have it. Influence has
                    multiple possible uses, you can only use one when you induce the event.
                  </p>
                  <p>
                    You can use Influence to seize control over many simple nervous systems. This can only affect
                    animals with no hidden body, this includes all invertebrates and jawless fish. For the rest of the
                    scene, you can completely control all qualifying animals that remain within a number of meters equal
                    to Influence of any Participant.
                  </p>
                </>,
                <p>
                  You can use Influence to control a few non-mammalian animals. Choose a number of qualifying animals
                  you can see equal to Influence within Range. You control the actions of these animals for the rest of
                  the scene, even if they leave Range.
                </p>,
                <p>
                  You can use Influence to control any earth animal or non-entangled human. Choose a single qualifying
                  target you can see within Range. The target can make a Willpower reaction. If your Influence exceeds
                  this reaction, you gain control. If the target is human, ordering it to take an action uses one of
                  your actions and you take a point of unavoidable Stress to Focus at the start of each round until you
                  relinquish control as a non-action.
                </p>,
              ]}
            />
          </Section>
          <Section header="Psychosomaticism" isClassified>
            <SpecializationDescription
              intro={
                <p>
                  You can add subtle telepathic suggestions to your Manipulate actions that can convince the target to
                  believe false things about the state of their body so intensely that their mind makes it real.
                </p>
              }
              ranks={[
                <p>
                  Your Manipulate action can now cause the Grappled state as if the target was restrained by an
                  invisible attacker in a space adjacent to them of your choosing.
                </p>,
                <p>
                  Your Manipulate action can now cause the Suppressed state in a target no matter where they are. The
                  states caused by your Manipulate actions don’t expire on your next turn but instead last until the
                  target is able to clear them normally.
                </p>,
                <p>Your Manipulate action can now cause the Unconscious state in non-entangled targets.</p>,
              ]}
            />
          </Section>
          <Section header="Read Mind" isClassified>
            <SpecializationDescription
              intro={<p>You can examine the thoughts and memories of others.</p>}
              ranks={[
                <>
                  <p>
                    Telepathy gains the metric “Influence: 1 point” if it didn't already have it. Influence has multiple
                    possible uses, you can only use one when you induce the event.
                  </p>
                  <p>
                    You can use Influence to attempt to read the mind of a target you can see in Range. When you do, the
                    target can use a default risk and effort Willpower reaction. If Influence is greater than the result
                    of the reaction you and all Participants can read the target's surface thoughts for the rest of the
                    scene. This includes their emotional state and infernal monologue.
                  </p>
                </>,
                <p>
                  If the event’s influence ties the target's reaction, the event grants access to surface thoughts. If
                  it is higher, it also accesses short term memories. This includes recent events and things that have
                  been on the target's mind earlier in the day.
                </p>,
                <>
                  <p>
                    If the event’s influence is lower than the target's reaction, the event still grants access to
                    surface thoughts. If it ties, it grants access to short term memories. If it is higher, it also
                    accesses long term memories.
                  </p>
                  <p>
                    The greater the difference between Influence and a lower reaction, the deeper the memories you can
                    access. Recent memories are easy, older memories might require at least 2, a dark secret at least 3.
                  </p>
                </>,
              ]}
            />
          </Section>
          <Section header="Sense Minds" isClassified>
            <SpecializationDescription
              intro={<p>You can feel the other minds around you.</p>}
              ranks={[
                <p>
                  At all times, you can sense the presence and location of any sentient minds within a number of meters
                  equal to your Far score, even if they are in hidden space.
                </p>,
                <p>You are aware of the general emotional state and stress level of the minds you sense.</p>,
                <p>
                  You know if the minds you sense are developing hostile intent, granting you advantage on any
                  initiative Challenges involving human opponents.
                </p>,
              ]}
            />
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default ChapterEntanglements;
